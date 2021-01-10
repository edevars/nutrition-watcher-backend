const { gql } = require('apollo-server')

const typeDefs = gql`

    type deleteResponse {
        recordsDeleted: Int!
        message: String!
    }

    type insertResponse {
        recordsInserted: Int!
        message: String!
        usersInserted: [User]
    }

    type User {
        userId: ID!
        name: String!
        userUrlPhoto: String!
        email: String!
        password: String!
        createdAt: String
        updatedAt: String
    }

    type Query {
        user(id: Int!): User,
        users: [User]
    }

    input UserInput {
        name: String!
        user_url_photo: String!
        email: String!
        password: String!
    }

    type Mutation{
        deleteUserById(id: Int!): deleteResponse!
        createUser(users: [UserInput!]!) : insertResponse
    }
`

module.exports = { typeDefs }