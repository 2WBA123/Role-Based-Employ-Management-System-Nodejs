const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');
const check = require('../middleware/check.middleware');
const { authRole } = require('../middleware/roleCheck.middleware');

router.post('/signup', employee.signUp); // check, authRole(['admin']),
router.post('/login', employee.logIn);
router.post('/', check, authRole(['admin']), employee.create);
router.get('/', employee.findAll); // check,
router.get('/:id', employee.findOne); //check, authRole(['admin']), 
router.delete('/:id',  employee.delete); //check, authRole(['admin']),
router.put('/:id', employee.update);
router.patch('/:id', employee.updatePass); // check,
router.post('/forget-password', employee.forgetPass);
router.post('/verify-password', employee.verifyPass);

module.exports = router;
