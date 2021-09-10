const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.get('/register', postController.getPostController)

router.post('/signup', postController.postRegisterController)

module.exports = router;