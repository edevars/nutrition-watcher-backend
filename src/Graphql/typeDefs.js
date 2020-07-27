const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        user_id: ID!
        name: String!
        user_url_photo: String!
        email: String!
        password: String!
    }

    type Query {
        getUser: User
    }
`

module.exports = { typeDefs }