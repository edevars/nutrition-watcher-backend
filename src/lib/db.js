const mysql = require('mysql');
const chalk = require('chalk');
const { config } = require('../../config');
const log = console.log;
// TODO: Change functrions into a class driver
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

function madeQuery(query) {
    return new Promise((resolve, reject) => {
        const connection = connectDB()
        connection.query(query, function (error, rows) {
            if (error) throw new Error(error)
            if (rows === undefined) {
                reject(new Error('Error rows is undefined'));
            } else {
                let string = JSON.stringify(rows);
                var json = JSON.parse(string);
                resolve(json);
            }
        });
    })
}

module.exports = { madeQuery }