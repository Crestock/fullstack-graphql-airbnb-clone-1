# fullstack-graphql-airbnb-clone

A Fullstack GraphQL Airbnb Clone with React.

## Installation

1. Clone project

```
git clone https://github.com/btvinh11/fullstack-graphql-airbnb-clone.git
```

2. cd into folder

```
cd fullstack-graphql-airbnb-clone
```

3. Download dependencies

```
yarn
```

4. Start PostgreSQL server
5. Create database called `graphql-ts-server-boilerplate`

```
createdb graphql-ts-server-boilerplate
```

6. [Add a user](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e) with the username `postgres` and no password. (You can change what these values are in the [ormconfig.json](https://github.com/benawad/graphql-ts-server-boilerplate/blob/master/ormconfig.json))

7. Connect to the database with `psql` or `psql -U postgres`(Windows) and add the uuid extension:

```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

8. Install and start Redis

9. In `packages/server` create a file called `.env` and add the following line inside: `FRONTEND_HOST=http://localhost:3000`

10. Run `yarn build` in `packages/common`

11. Run `yarn build` in `packages/controller`

## Usage

1. Start server `yarn start` in `packages/server`

2. Now you can run `yarn start` in `packages/web` to start the website.
