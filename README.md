# graphql-demo
graphql demo for an architecture meeting

## Installation
```
git clone https://github.com/lukeartnak/graphql-demo
cd graphql-demo
npm install
```

## Setup

We configured PostGraphQL to only use tables under the graphql_demo schema which
can be created using the commands below.
```
psql
create schema graphql_demo;
```

We can then start the server using `npm start` and navigate to [the graphql gui](http://localhost:8000/graphiql).

## Creating Schemas

The server is configured to refresh the schema when the postgres database, so
any changes to the database made while the server is running will be accessible
without restarting the server.

Let's create the first table, users.
```
psql
create table graphql_demo.users (
  id serial primary key,
  username text not null
);
insert into graphql_demo.users (username) values ('user1'), ('user2'), ('user3');
```

You will notice that GraphiQL has seen the change and refreshed its schema, so
now we can access users from a graphql query. In GraphiQL run the query below.
```
{
  allUsers(first: 3) {
    nodes {
      id,
      username
    }
  }
}
```

We have created our first functioning graphql query
