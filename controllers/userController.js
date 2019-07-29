const User = require('../models/users')
const Passport = require('passport')


// Express Validator
const { check, validationResult, sanitize } = require('express-validator')


// Query Parse
const querystring = require('querystring')

// Get for login page
exports.loginGet = (req, res) => {
  res.render('login')
}

exports.registerGet = (req, res) => {
  res.render('register')
}

exports.registerUser = [
  // Validations
  check('fname').isLength({  min: 1 }).withMessage('First name cannot be blank')
  .isAlphanumeric().withMessage('First Name must be alphanumeric'),

  check('lname').isLength({  min: 1 }).withMessage('Last name cannot be blank')
  .isAlphanumeric().withMessage('Last Name must be alphanumeric'),

  check('email').isEmail().withMessage('Email must be in valid format'),

  check('password').isLength({ min : 6}).withMessage('Password must be at least 8 characters'),

  check('confirm_password')
  .custom( ( value, { req }) => value === req.body.password )
  .withMessage('Passwords do not match'),

  // Sanitize possibly malicious form data
  sanitize('*').trim().escape(),


  // Request
  (req, res, next) => {
    const errors = validationResult(req)
    if( !errors.isEmpty() ) {
      // Errors
      res.render('register', { title: 'Please fix the following errors:', errors: errors.array() })
      return
    } else {
      const newUser = new User(req.body)
      User.register( newUser, req.body.password, (err) => {
        if(err) {
          console.log('Registration Error', err)
          return next()
        }
        next() // Moves onto loginUser after no errors
      })
    }
  }
]

// exports.registerTwitter = (req, res) => {
//
// }
//
// exports.registerFacebook = (req, res) => {
//
// }

exports.loginUser = Passport.authenticate('local', {
  successRedirect: '/',
  successFlash: 'You are now logged in',
  failureRedirect: '/login',
  failureFlash: 'Login failed, please check your credentials and try again'
})

exports.logout = (req, res) => {
  req.logout()
  console.log('User has been logged out')
  req.flash('info', 'You are now logged out.')
  res.redirect('/')
}
