const express = require('express');
const tuitionRouter = require('./TuitionRoute');
const { createUser, loginUser } = require('../controllers/user.controller');

const authRouter = express.Router();
authRouter.post('/signup',createUser)
authRouter.post('/login',loginUser)

module.exports = authRouter