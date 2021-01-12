const { models } = require('../../sequelize')
const { decodedToken } = require('../../auth/decodedToken')

async function createDailyCheck(_, { dailyCheck }, { req }) {
    decodedToken(req)
    
    try {
        const formatedDate = Date.now();
        const createdDailyCheck = models.dailyCheck.create({
            ...dailyCheck,
            date: formatedDate
        })

        return createdDailyCheck;
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createDailyCheck
}