const Department = require('../models/department.model');
const mongoose = require('mongoose');

// Creating Department
exports.create = async (req, res) => {
	// Validating Note
	if (!req.body) {
		return res.status(400).send({
			message: 'Please Enter Some Data',
		});
	}

	const department = new Department({
		_id: mongoose.Types.ObjectId(),
		name: req.body.name,
		description: req.body.description,
		salary_range: req.body.salary_range,
	});
	department
		.save()
		// .select('_id email password name phone department')
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
}; // Create Ends Here

// Getting All Employees
exports.findAll = async (req, res) => {
	Department.find()
		.select('_id name description name salary_range ')
		.then((data) => {
			res.status(200).json({
				count: data.length,
				department: data,
			});
		})
		.catch((err) => {
			res.status(500).json({
				error: err,
			});
		});
}; // Getting All Ends Here
