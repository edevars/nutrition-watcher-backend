const sequelize = require('../../sequelize')
const User = require('../../Models/User')(sequelize)



const user = async (_, { id }) => {
    const timeElapsed = await Date.now();
    const today = new Date(timeElapsed);
    return {
        userId: 1,
        name: 'Enrique',
        user_url_photo: 'photo.png',
        email: 'enrique.devars@gmail.com',
        password: 'some shit',
        createdAt: today.toISOString(),
        updatedAt: today.toISOString(),
    }
}

const users = async () => {
    const timeElapsed = await Date.now();
    const today = new Date(timeElapsed);
    return ([
        {
            userId: 1,
            name: 'Enrique',
            user_url_photo: 'photo.png',
            email: 'enrique.devars@gmail.com',
            password: 'some shit',
            createdAt: today.toISOString(),
            updatedAt: today.toISOString(),
        },
        {
            userId: 1,
            name: 'Enrique',
            user_url_photo: 'photo.png',
            email: 'enrique.devars@gmail.com',
            password: 'some shit',
            createdAt: today.toISOString(),
            updatedAt: today.toISOString(),
        }
    ])
}

module.exports = {
    user,
    users
}