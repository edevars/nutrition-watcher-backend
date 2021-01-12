const { models } = require('../../sequelize')
const { decodedToken } = require('../../auth/decodedToken')

const user = async (_, { id }, { req }) => {
    decodedToken(req)
    try {
        const user = await models.user.findOne({
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
        const users = await models.user.findAll();
        return (users)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    user,
    users
}