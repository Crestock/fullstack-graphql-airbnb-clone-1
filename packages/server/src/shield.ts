import { rule, shield } from "graphql-shield";

// const isAuthenticated = rule({ cache: "contextual" })(
//   async (parent, args, ctx, info) => {
//     return ctx.user !== null;
//   }
// );

const isAuthenticated = rule()((_: any, __: any, context: any) => {
  return !!context.session.userId;
});

export const middlwareShield = shield({
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated,
  },
});
