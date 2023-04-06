const express = require('express');
const { getTuitions } = require('../controllers/tuition.controller');
const tuitionRouter = express.Router();

tuitionRouter.route('/tuitions')
.get(getTuitions)

module.exports = tuitionRouter