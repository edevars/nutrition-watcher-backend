const dotenv = require('dotenv')

dotenv.config()

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dev: process.env.NODE_ENV === 'development'
}

module.exports = { config }