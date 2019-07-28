const User = require('../models/users')
const Passport = require('passport')


// Express Validator
const { check, validationResult, sanitize } = require('express-validator')


// Query Parse
const querystring = require('querystring')

// Get for login page
exports.loginReg = (req, res) => {
  res.render('login-register')
}

exports.navBar = (req, res) =>{

}
