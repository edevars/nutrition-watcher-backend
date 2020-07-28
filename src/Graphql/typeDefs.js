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
        user_id: ID!
        user_name: String!
        user_url_photo: String!
        email: String!
        user_password: String!
    }

    type Query {
        user(id: Int!): User,
        users: [User]
    }

    input UserInput {
        user_name: String!
        user_url_photo: String!
        email: String!
        user_password: String!
    }

    type Mutation{
        deleteUser(id: Int!): deleteResponse!
        insertUsers(users: [UserInput!]!) : insertResponse
    }
`

module.exports = { typeDefs }