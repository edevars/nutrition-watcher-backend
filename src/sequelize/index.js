const Sequelize = require('sequelize');
const { config } = require('../../config')
const { username, password, host, database, port } = config;

// Creating conection
const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});

//Defyning models
const modelDefiners = [
    require('../Models/User')
]

// Adding models
modelDefiners.map(modelDefiner => {
    modelDefiner(sequelize)
})

module.exports = sequelize 