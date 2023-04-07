const express = require('express');
const tuitionRouter = require('./TuitionRoute');
const { createUser } = require('../controllers/user.controller');

const authRouter = express.Router();
authRouter.post('/signup',createUser)

module.exports = authRouter