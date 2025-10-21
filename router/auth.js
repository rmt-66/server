const express = require('express')
const AuthController = require('../controllers/AuthController')

const authRouter = express.Router()

authRouter.get('/register', AuthController.register)

module.exports = authRouter