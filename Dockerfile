FROM node

# Create app directory
RUN mkdir -p /abb
WORKDIR /abb

# Install app dependencies
COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env.prod ./packages/server/.env
COPY ./packages/server/.env.example ./packages/server/.env.example

WORKDIR /abb/packages/server

ENV NODE_ENV production

# Open app port and start
EXPOSE 4000
CMD ["node", "dist/index.js"]