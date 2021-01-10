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

    input UserCreateInput {
        name: String!
        userUrlPhoto: String!
        email: String!
        password: String!
    }

    input UserLoginInput {
        email: String!
        password: String!
    }

    type AuthPayLoad {
        token: String!
    }

    type Query {
        user(id: Int!): User,
        users: [User]
    }

    type Mutation{
        deleteUserById(id: Int!): deleteResponse!
        signupUser(user: UserCreateInput!) : AuthPayLoad!
        loginUser(user: UserLoginInput!): AuthPayLoad!
    }
`

module.exports = { typeDefs }