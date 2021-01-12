const { models } = require('../../sequelize')
const { decodedToken } = require('../../auth/decodedToken')

async function getDailyChecks(_, { userId }, { req }) {
    decodedToken(req)
    try {
        const dailyChecks = await models.dailyCheck.findAll({
            where: {
                userId
            }
        });
        return (dailyChecks)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getDailyChecks
}