const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../../../config');

const { jwtSecret } = config;

const deleteUserById = async (root, args) => {
    const { id } = args;
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

const signupUser = async (root, args) => {
    const { user } = args;
    try {
        const { dataValues: newUser } = await User.create({
            ...user,
            password: bcrypt.hashSync(user.password, 3)
        });

        return { token: jwt.sign(newUser, jwtSecret) };
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    deleteUserById,
    signupUser
}