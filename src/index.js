const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./Graphql/typeDefs');
const { resolvers } = require('./Graphql/resolvers');
const sequelize = require('./sequelize');

async function assertDatabaseConnectionOk() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    // checking connection to DB
    await assertDatabaseConnectionOk();
    await sequelize.sync();

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}

init()






