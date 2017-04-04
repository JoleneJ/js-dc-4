var express = require('express')
var exhandlebars = require('express-handlebars')

var data = {
  'projects': [ {
    'id': 0,
    'title': 'War - the card game',
    'description': 'Implement the game of war as a command line game'
  },
  {
    'id': 1,
    'title': 'Express homework',
    'description': 'Create a server'
  },
  {
    'id': 2,
    'title': 'Some other project',
    'description': 'look at blah blah'
  }]
}

var app = express()

app.engine('handlebars', exhandlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (request, response) {
  response.render('home', {'title': 'Test'})
})

app.get('/projects', function (req, res) {
  res.render('projects', data)
})

app.get('/projects/:id', function (req, res) {
  var id = req.params.id
  var index = parseInt(id, 10)
  var project = data.projects[index]
  res.render('project', project)
})

app.listen(3000, function () {
  console.log('My first Javascript app on port 3000');
})
