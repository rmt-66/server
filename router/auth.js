const authRouter = require('express').Router();
const AuthController = require('../controllers/AuthController');

authRouter.get('/login', AuthController.login);

module.exports = authRouter;