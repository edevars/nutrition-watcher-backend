const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('dailyCheck', {
        idDailyCheck: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        weight: DataTypes.FLOAT,
        waistLenght: DataTypes.FLOAT,
        date: DataTypes.DATEONLY,
        waterGlasses: DataTypes.INTEGER,
        caloriesCount: DataTypes.INTEGER,
    }, { timestamps: false })
}