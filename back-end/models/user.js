const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: String,
    password: String,
    phone_number: String,
    email: String,
    first_name: String,
    last_name: String,
    tag: Array
  })
  

const UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel


