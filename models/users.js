const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required, duh',
    trim: true,
    unique: true,
    lowercase: true
  },
  fname: {
    type: String,
    required: 'First name is required',
    trim: true,
    max: 32
  },
  lname: {
    type: String,
    required: 'Last name is required',
    trim: true,
    max: 32
  },
  email: {
    type: String,
    required: 'Email is required',
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: 'Password must be boop beep boop',
    bcrypt: true
  },
  favorites: {
    type: Array
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true });

userSchema.plugin(mongooseBcrypt);
userSchema.plugin(passportLocalMongoose, { usernameQueryFields: ['email'] });

module.exports = mongoose.model('User', userSchema);
