const { gql } = require('apollo-server')

const typeDefs = gql`

    type deleteResponse {
        recordsDeleted: Int!
        message: String!
    }

    type User {
        user_id: ID!
        user_name: String!
        user_url_photo: String!
        email: String!
        password: String!
    }

    type Query {
        getUser: User,
        getUsers: [User]
    }

    type Mutation{
        deleteUser(id: ID!): deleteResponse! 
    }
`

module.exports = { typeDefs }