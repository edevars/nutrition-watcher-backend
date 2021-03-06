const dotenv = require('dotenv')

dotenv.config()

const config = {
    host: process.env.HOST,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    dev: process.env.NODE_ENV === 'development'
}

module.exports = { config }