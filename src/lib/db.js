const mysql = require('mysql');
const chalk = require('chalk');
const { config } = require('../../config');
const log = console.log;

let connection;

const { host, user, password, database, dev } = config

function connectDB() {
    if (connection) {
        dev && log(chalk.bgRed.white.bold(`Connection with ${connection.config.database} already exists`))
        return connection;
    }

    try {
        connection = mysql.createConnection({
            host,
            user,
            password,
            database
        });
        dev && log(chalk.cyan.bold('Connection created'))
    } catch (error) {
        console.error('Something wrond ocurred: ', error)
    }

    return connection;

}

module.exports = { connectDB }