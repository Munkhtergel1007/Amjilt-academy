const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');


router.get('/admin', adminController.getAdminController)



module.exports = router;