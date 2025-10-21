const express = require('express')
const HomeController = require('../controllers/HomeController')

const homeRouter = express.Router()

homeRouter.get('/', HomeController.index)

module.exports = homeRouter