const authRouter = require('express').Router();
const AuthController = require('../controllers/AuthController');

authRouter.get('/register', AuthController.register)
authRouter.get('/login', AuthController.login);

module.exports = authRouter;
