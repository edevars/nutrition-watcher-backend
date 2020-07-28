const mysql = require('mysql');
const chalk = require('chalk');
const { config } = require('../../config');
const log = console.log;

const { host, user, password, database, dev } = config

class Database {
    constructor() {
        this.host = host
        this.database = database
        this.user = user
        this.password = password
        this.connection = null
    }

    connectDB() {
        if (this.connection) {
            dev && log(chalk.bgRed.white.bold(`Connection with ${this.connection.config.database} already exists`))
        } else {
            try {
                this.connection = mysql.createConnection({
                    host: this.host,
                    user: this.user,
                    database: this.database,
                    password: this.password
                });
                dev && log(chalk.cyan.bold('Connection created'))
            } catch (error) {
                console.error('Something wrond ocurred: ', error)
            }
        }
    }

    select(query) {
        return new Promise((resolve, reject) => {
            this.connectDB()
            this.connection.query(query, function (error, rows) {
                if (error) throw new Error(error)
                if (rows === undefined) {
                    reject(new Error('Error: rows is undefined'));
                } else {
                    let string = JSON.stringify(rows);
                    var json = JSON.parse(string);
                    resolve(json);
                }
            });
        })
    }

    deleteAll(table) {
        return new Promise((resolve, reject) => {
            this.connectDB()
            this.connection.query(`delete from ${table}`, function (error, result) {
                if (error) throw new Error(error)
                if (result === undefined) {
                    reject(new Error('Error: couldn\'t delete the field'));
                } else {
                    const message = 'Number of records deleted: ' + result.affectedRows
                    resolve(message);
                }
            });
        })
    }

    deleteBy(table, field, value) {
        return new Promise((resolve, reject) => {
            this.connectDB()
            this.connection.query(`delete from ${table} where ${field}=${value}`, function (error, result) {
                if (error) throw new Error(error)
                if (result === undefined) {
                    reject(new Error('Error: couldn\'t delete the field'));
                } else {
                    resolve(result.affectedRows)
                }
            });
        })
    }
}


module.exports = { Database }