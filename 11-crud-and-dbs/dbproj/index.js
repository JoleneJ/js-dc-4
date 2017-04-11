var express = require('express')
var bodyParser = require('body-Parser')
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
var Entry = require('./models/entry.js');

mongoose.connect('mongodb://localhost:27017/guestbook')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res){
  Entry.find({}, function (err, guests){
    res.render('home', {name: 'Jolene', guests: guests})
  })
})

app.post('/', function (req, res) {
  var currentEntry = new Entry({
    content: req.body.content,
    name: req.body.name
  })
  currentEntry.save()

  Entry.find({ function (err, res) {
    if(err){
      console.log(err);
    }else {
      console.log(guests);
    }
    res.render('home', {
      name: 'Jolene',
      guests: guests
    })
  }})
})

app.listen(3000, function () {
  console.log('Guestbook app is running!');
})
