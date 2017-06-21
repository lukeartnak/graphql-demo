const express = require('express')
const {postgraphql} = require('postgraphql')

let app = express()

app.use(postgraphql('postgres://localhost:5432', 'graphql_demo', {
  graphiql: true,
  watchPg: true
}))

app.listen(8000, () => {
  console.log('server listening at http://localhost:8000')
})
