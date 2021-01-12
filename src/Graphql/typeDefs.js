const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        userId: ID!
        name: String!
        userUrlPhoto: String!
        email: String!
        password: String!
        createdAt: String
        updatedAt: String
    }

    type DailyCheck {
        idDailyCheck: ID!
        weight: Float!
        waistLenght: Float!
        date: String!
        waterGlasses: Int
        caloriesCount: Int
        userId: ID!
    }

    input DailyCheckCreateInput {
        weight: Float!
        waistLenght: Float!
        date: String!
        waterGlasses: Int
        caloriesCount: Int
        userId: ID!
    }

    type deleteResponse {
        recordsDeleted: Int!
        message: String!
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
        # Users
        user(id: Int!): User,
        users: [User]

        # DailyChecks
        getDailyChecks(userId: ID!): [DailyCheck]
    }

    type Mutation{
        # Users
        deleteUserById(id: Int!): deleteResponse!
        signupUser(user: UserCreateInput!) : AuthPayLoad!
        loginUser(user: UserLoginInput!): AuthPayLoad!

        # DailyChecks
        createDailyCheck(dailyCheck: DailyCheckCreateInput!): DailyCheck
    }
`

module.exports = { typeDefs }