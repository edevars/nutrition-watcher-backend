const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Graphql/typeDefs');
const { resolvers } = require('./Graphql/resolvers');
const { initConnection } = require('./sequelize/initConnection');



async function initServer() {

    await initConnection();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req}) => ({
            req
        })
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}

initServer()






