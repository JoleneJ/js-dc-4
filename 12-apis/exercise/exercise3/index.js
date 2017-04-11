var express = require('express')
var exphbs = require('express-handlebars')
var mongoose = require('mongoose')
const Pokemon = require('./models/pokemon.js');

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/', function (req, res) {
  res.render('home')
})
.post('/', function (req, res) {
  var currentPokemon = new Pokemon({
    name: req.body.name
  })
})

app.listen(3000, function () {
  console.log('App working');
})
