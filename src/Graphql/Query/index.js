const userQueries = require('./userQueries')
const dailyCheckQueries = require('./dailyCheckQueries')

module.exports = {
    ...userQueries,
    ...dailyCheckQueries
}