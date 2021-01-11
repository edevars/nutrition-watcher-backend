const Sequelize = require('sequelize');
const { config } = require('../../config')
const { applyRelations } = require('./aplyingRelations');

const { username, password, host, database, port, dev } = config;

// Creating conection
const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    },
    logging: dev
});

//Defyning models
const modelDefiners = [
    require('../Models/User'),
    require('../Models/DailyCheck')
]

modelDefiners.map(modelDefiner => {
    modelDefiner(sequelize)
})

applyRelations(sequelize)

module.exports = sequelize 