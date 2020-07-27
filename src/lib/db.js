const mysql = require('mysql');
const chalk = require('chalk');
const { config } = require('../../config');
const log = console.log;

const { host, user, password, database, dev } = config

class Database {
    constructor(){
        this.host = host
        this.database = database
        this.user = user
        this.password = password
        this.connection = null
    }

    connectDB(){
        if (this.connection) {
            dev && log(chalk.bgRed.white.bold(`Connection with ${this.connection.config.database} already exists`))
        }else{
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

    select(query){
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
}


module.exports = { Database }