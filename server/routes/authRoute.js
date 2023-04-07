const express = require('express');

const { createUser, loginUser,  verifyTokenController } = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

const authRouter = express.Router();
authRouter.post('/signup',createUser)
authRouter.post('/login',loginUser)
authRouter.get('/verify-token',verifyToken,verifyTokenController)

module.exports = authRouter