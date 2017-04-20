var mongoose = require('mongoose')
var Schema = mongoose.Schema

<<<<<<< HEAD
var ArticleSchema = new Schema ({
=======
var ArticleSchema = new Schema({
>>>>>>> 86bdae2106f563dd4d24d0964e09ffd52c293d38
  author: String,
  title: String,
  description: String,
  url: String,
  comments: Array
})

<<<<<<< HEAD
var Article = mongoose.model('Article', ArticleSchema)
=======
var Article = mongoose.model( 'Article', ArticleSchema )
>>>>>>> 86bdae2106f563dd4d24d0964e09ffd52c293d38

module.exports = Article
