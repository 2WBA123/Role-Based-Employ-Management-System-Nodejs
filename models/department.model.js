const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const DepartmentSchema = mongoose.Schema(
	{
		dept_id: mongoose.Types.ObjectId,
		name: String,
		description: String,
		salary_range: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('departments', DepartmentSchema);
