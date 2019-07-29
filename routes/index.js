const express = require('express');
const router = express.Router();

const {
  landingPage
 } = require('../controllers/foodController')

const {
  loginGet,
  registerGet,
  registerUser,
  registerTwitter,
  registerFacebook,
  loginUser,
  logout
} = require('../controllers/userController')

// Main routes
router.get('/', landingPage)
// router.get('/search', searchRecipes)

// User Routes Get routes
router.get('/register', registerGet)
router.get('/login', loginGet)
router.get('/logout', logout)

// User Post Routes
router.post('/register', registerUser, loginUser)
router.post('/login', loginUser)
// router.post('/register-facebook', registerFacebook)
// router.post('/register-twitter', registerTwitter)

module.exports = router;
