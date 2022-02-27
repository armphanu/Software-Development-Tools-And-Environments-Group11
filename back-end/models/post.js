
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    description: String,
    tag: Array,
  })
  

const UserModel = mongoose.model('post', postSchema, 'post')

module.exports = UserModel


