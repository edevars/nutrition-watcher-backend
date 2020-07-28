const { Database } = require('../../lib/db')

const db = new Database();

const deleteUser = async () => {
    try {
        const recordsDeleted = await db.deleteBy('users','user_id',1)
        if(recordsDeleted===0){
            return {
                recordsDeleted,
                message: 'The object can\'t be deleted because doesn\'t exists in the DB'
            }
        }
        return {
            recordsDeleted,
            message: 'The deletion completes succesfully'
        }
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    deleteUser
}