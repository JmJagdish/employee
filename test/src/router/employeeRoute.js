const express = require('express');
const { getAllEmployee, createEmployee, getOneEmployee, deleteEmployee } = require('../controller/employeeController');
const { get } = require('mongoose');

const router = express.Router();

router.route('./employee', get(getAllEmployee));
router.route('./employee', post(createEmployee));
router.route('./employee', get(getOneEmployee));
router.route('./employee', deleteOne(deleteEmployee));

module.exports = router;