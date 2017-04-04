var express = require('express')
var exhandlebars = require('express-handlebars')

var app = express()

app.engine('handlebars', exhandlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.send('Hi')
})

app.listen(3000, function () {
  console.log('My pokedex is working');
})
