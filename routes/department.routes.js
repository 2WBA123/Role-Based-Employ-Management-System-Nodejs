const express = require('express');
const router = express.Router();

const department = require('../controllers/department.controller');
const check = require('../middleware/check.middleware');
const { authRole } = require('../middleware/roleCheck.middleware');

router.post('/',  department.create);//check, authRole(['admin']),
router.get('/',  department.findAll);//check, authRole(['admin']),

module.exports = router;
