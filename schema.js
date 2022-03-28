const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    info: String!
    # items: [Item!]!
  }

  type Item {
    id: ID!
    content: String!
    complete: Boolean!
  }
`

module.exports = typeDefs
