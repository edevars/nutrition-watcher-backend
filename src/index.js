const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Graphql/typeDefs');
const { resolvers } = require('./Graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});