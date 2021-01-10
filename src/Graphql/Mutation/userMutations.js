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

const loginUser = async (root, args) => {
    const { user: { email, password } } = args;
    try {
        const { dataValues: findedUser } = await User.findOne({
            where: {
                email: email
            }
        });

        if (!findedUser) throw new Error('Please check your user and password');
        const isMatch = bcrypt.compareSync(password, findedUser.password);
        if (!isMatch) throw new Error('Please check your user and password');
        return { token: jwt.sign(findedUser, jwtSecret) };
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    deleteUserById,
    signupUser,
    loginUser
}