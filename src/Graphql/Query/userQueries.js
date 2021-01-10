const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)
const { decodedToken } = require('../../auth/decodedToken')

const user = async (_, { id }, { req }) => {
    decodedToken(req)
    try {
        const user = await User.findOne({
            where: {
                userId: id
            }
        });
        return (user)
    } catch (error) {
        console.error(error)
    }


}

const users = async (_, __, context) => {
    const { req } = context;
    decodedToken(req);
    try {
        const users = await User.findAll();
        return (users)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    user,
    users
}