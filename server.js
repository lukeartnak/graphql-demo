const express = require('express')
const graphql = require('express-graphql')
const {buildSchema} = require('graphql')

let app = express()

let schema = buildSchema(`
  type Query {
    hello: String
  }
`)

let rootValue = {
  hello() {
    return 'World!'
  }
}

app.use('/graphql', graphql({schema, rootValue, graphiql: true}))

app.listen(8000, () => {
  console.log('server listening at http://localhost:8000')
})
