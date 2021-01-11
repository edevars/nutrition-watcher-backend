async function applyRelations(sequelize) {
	const { user, dailyCheck } = sequelize.models;
	user.hasMany(dailyCheck, {foreignKey: 'userId'})
}

module.exports = { applyRelations };