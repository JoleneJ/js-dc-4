var data = {
  todos: [
    'learn html',
    'learn css',
    'learn js'
  ]
}



function renderedTemplate(data) {
  var app = document.getElementById('app')
  var templateSource = document.getElementById('to-do-template')
  var template = Handlebars.compile(templateSource.innerHTML)
  var renderedTemplate = template(data)
//  console.log(renderedTemplate);

  app.innerHTML = renderedTemplate
}

renderedTemplate(data)

var form = document.getElementById('form')
form.addEventListener('submit', addToDo)

function addToDo(e) {
  e.preventDefault()

  var todoInput = e.target.querySelector('input')
  var newTodoItem = todoInput.value
  data.todos.push(newTodoItem)
  todoInput.value = ''

  renderedTemplate(data)
}
