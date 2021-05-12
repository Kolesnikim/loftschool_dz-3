const express = require('express')

const mainController = require('../controllers/mainController')
const db = require('../models/db')

const router = express.Router()

router.get('/', mainController.getMainPage)

router.post('/', mainController.sendMessage)

module.exports = router
