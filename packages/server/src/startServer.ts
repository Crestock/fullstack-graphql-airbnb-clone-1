import "reflect-metadata";
// tslint:disable-next-line: no-var-requires
require("dotenv-safe").config();
import { GraphQLServer } from "graphql-yoga";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as rateLimit from "express-rate-limit";
import * as rateLimitRedisStore from "rate-limit-redis";
import { applyMiddleware } from "graphql-middleware";
import * as express from "express";

import { redis } from "./redis";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix } from "./constants";
import { createTestConn } from "./testSetup/createTestConn";
import { createTypeormConn } from "./utils/createTypeormConn";
import { middleware } from "./middleware";
// import { middlwareShield } from "./shield";

const SESSION_SECRET = "sjkldfhaiofhewuio";
const RedisStore = connectRedis(session);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema();
  applyMiddleware(schema, middleware);
  // applyMiddleware(schema, middlwareShield);

  const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({
      redis,
      url: request.protocol + "://" + request.get("host"),
      session: request.session,
      req: request,
    }),
  });

  server.express.use(
    rateLimit({
      store: new rateLimitRedisStore({
        client: redis,
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

  server.express.use(
    session({
      store: new RedisStore({ client: redis, prefix: redisSessionPrefix }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
    })
  );

  server.express.use("/images", express.static("images"));

  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string),
  };

  server.express.get("/confirm/:id", confirmEmail);

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    const conn = await createTypeormConn();
    await conn.runMigrations();
  }

  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port,
  });
  console.log("Server is running on localhost:4000");

  return app;
};
