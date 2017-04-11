var mongoose = require('mongoose')
var Schema = mongoose.Schema

var quoteSchema = new Schema({
  author: String,
  text: String
})

var Quotes = mongoose.model('Quotes', quoteSchema)

module.exports = Quotes
