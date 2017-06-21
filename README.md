# graphql-demo
graphql demo for an architecture meeting

## Installation
```
git clone https://github.com/lukeartnak/graphql-demo
cd graphql-demo
npm install
```

## Setup

This demo will generate its endpoints from the graphql_demo schema in the
postgres database, so we must create that in our database.
```
psql
=# create schema graphql_demo;
```

We can then start the server using `npm start` and navigate to [the graphql gui](http://localhost:8000/graphiql).
