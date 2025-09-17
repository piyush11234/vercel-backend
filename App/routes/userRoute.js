const express = require('express');
const { signup, login, logout } = require('../controller/userController.js');
const authMiddleware = require('../middleware/auth.js');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout',authMiddleware, logout);

module.exports = router;
