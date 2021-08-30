const expess = require('express');
const router = expess.Router();
const authentication = require('../controller/authController')


router.get('/login', authentication.getLoginController)


router.post('/user/login', authentication.postLoginController)

module.exports = router;