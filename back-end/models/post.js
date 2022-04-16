
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    userid:String,
    description: String,
    tag: Array,
    comment:Array,
    like:Array,
    report:Array,
  })
  

const UserModel = mongoose.model('post', postSchema, 'post')

module.exports = UserModel


