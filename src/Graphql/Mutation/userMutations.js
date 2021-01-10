const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)


const deleteUserById = async (_, { id }) => {
    try {
        await User.destroy({
            where: {
                userId: id
            }
        });
        return {
            recordsDeleted: 1,
            message: `User with the Id: ${id} successfully deleted`
        }
    } catch (error) {
        console.error(error)
    }

}

const createUser = async (_, { user }) => {

}

module.exports = {
    deleteUserById,
    createUser
}