const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.homeController)

router.get('/login', mainController.loginController);

router.get('/contact',  mainController.contactController);

router.get('/about', mainController.aboutController);

module.exports = router;