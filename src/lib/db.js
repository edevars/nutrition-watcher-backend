const Sequelize = require('sequelize');
const { config } = require('../../config')
const { username, password, host, database, port } = config;

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    },
});

sequelize.authenticate().then(() => {
    console.log('Connection to Postgres successful');
}).catch((err) => {
    console.log(err);
});