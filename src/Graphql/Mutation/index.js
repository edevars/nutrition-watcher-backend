const userMutations = require('./userMutations')
const dailyChceksMutations = require('./dailyChceksMutations')

module.exports = {
    ...userMutations,
    ...dailyChceksMutations
}