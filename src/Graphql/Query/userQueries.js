const { Database } = require('../../lib/db')

const db = new Database();

const getUser = () => {
    return {
        user_id: 1,
        user_name: 'Enrique',
        user_url_photo: 'photo.png',
        email: 'enrique.devars@gmail.com',
        password: 'some shit'
    }
}

const getUsers = async () => {
    try {
        const queryResults = await db.select('select * from users')
        return queryResults
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getUser,
    getUsers
}