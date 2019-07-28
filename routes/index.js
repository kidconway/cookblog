const express = require('express');
const router = express.Router();

const { landingPage } = require('../controllers/foodController')
const { login, register, loginReg } = require('../controllers/userController')

// Main routes
router.get('/', landingPage);

// User Routes
router.get('/', loginReg);

module.exports = router;
