const express = require('express');

const { createUser, loginUser,  verifyTokenController, uploadProfilePicture } = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const uploader = require('../middlewares/uploader');

const authRouter = express.Router();
authRouter.post('/signup',createUser)
authRouter.post('/login',loginUser)
authRouter.get('/verify-token',verifyToken,verifyTokenController)
authRouter.post('/upload',uploader.single("image"),uploadProfilePicture)

module.exports = authRouter