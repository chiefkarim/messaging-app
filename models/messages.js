const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessagingSchema = new Schema({
    name:String,
    message:String,
    date:Date
})

module.exports = mongoose.model('messaging',MessagingSchema)