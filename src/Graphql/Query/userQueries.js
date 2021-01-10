const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)

const user = async (_, { id }) => {
    console.log('El id que llega es: ', id)
    const user = await User.findAll({
        where: {
            userId: id
        }
    });
    
    return (user[0])
}

const users = async () => {
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