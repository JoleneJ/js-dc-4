var express = require('express');
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hackerwall')

var Article = require('./models/Article');

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

// var testArticle = new Article({
//   url: 'www.google.com',
//   author: 'Jolene',
//   title: 'Test Article Google',
//   description: 'We test our db'
// })
//
// testArticle.save()

app.get('/', function (req, res) {
  //index route
  //list all the article

  Article.find({}, function (err, articles) {
    res.render('index', {articles: articles})
  })
})

app.get('/article/new', function (req, res) {
  //new view (route)
  //render template for creating a new article
  res.render('new')
})
.post('/article/new', function (req, res) {
  //create a new article in the DB
  //render show view for new article

  var newArticle = new Article ({
    author: req.body.author,
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  })

  newArticle.save()

  res.redirect('/')
})

app.get('/article/:id', function (req, res) {
  //show route
  //show details for a specific/single article

})



//run on port 3000
app.listen(3000)
