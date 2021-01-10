const { gql } = require('apollo-server')

const typeDefs = gql`

    type deleteResponse {
        recordsDeleted: Int!
        message: String!
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
        userUrlPhoto: String!
        email: String!
        password: String!
    }

    type Mutation{
        deleteUserById(id: Int!): deleteResponse!
        createUser(user: UserInput!) : User!
    }
`

module.exports = { typeDefs }