const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)


const deleteUserById = async (_, { id }) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                userId: id
            }
        });
        if (deletedUser !== 0) {
            return {
                recordsDeleted: 1,
                message: `User with the Id: ${id} successfully deleted`
            }
        }

        return {
            recordsDeleted: 0,
            message: `The user with id: ${id} doesn't exists`
        }

    } catch (error) {
        console.error(error)
    }

}

const createUser = async (_, { user }) => {
    try {
        const newUser = await User.create(user);
        return newUser;
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    deleteUserById,
    createUser
}