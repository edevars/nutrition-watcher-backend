const sequelize = require('./index.js');

async function assertDatabaseConnectionOk() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function initConnection() {
    // checking connection to DB
    await assertDatabaseConnectionOk();
    // Synchronizing models
    await sequelize.sync({
        logging: () => {
            console.log('Synchronizing models')
        }
    });
}

module.exports = { initConnection };