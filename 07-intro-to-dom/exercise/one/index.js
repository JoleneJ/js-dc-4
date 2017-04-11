/*

In-class Exercise 1

*/


/*

Getting stuff from the DOM

*/
// console.log("Hello world");

// Get #title
// var title = document.getElementById('title')
//console.dir(title);
// document.querySelector('title')
// var paragraph = document.getElementById('second-paragraph')
//var title2 =  document.getElementsByTagName('h1')

// var link = paragraph.querySelector('#link')
// Get the text of #title
var title = document.querySelector('h1')
console.dir(title) // will print the html element
console.log( title.textContent ) // prints the text
console.log( typeof title.textContent ) // string


/*

Setting stuff in the DOM

*/

// Change the text of #title
title.textContent = 'New Test Title' // replaces the current title
title.textContent += ' test' // adds to teh curent title


// Change the styeling of an element
console.log( title.style ) // object representing the element's styling
title.style.backgroundColor = 'blue'
title.style.padding = '2em'
title.style.width = '100%'
title.style.textAlign = 'center'


/*

Creating DOM elements

*/

var link = document.createElement('a') // creates a new element (in memory)
link.href = "/" // sets the href property of the <a> element
link.id = 'myLink' // sets the ID property
link.textContent = "This is a link I made"

console.dir( link ) // <a href="/" id="myLink">This is a link I made</a>

/*

Adding and removing elements from the page
via append, remove

*/

// Appending
var firstp = document.getElementById('first-paragraph')
firstp.appendChild( link )
// link will be appended (added to the end) as a child (so within the p element)


// Removing
// link.remove() // removes the element
// para.removeChild(link) // removes a child element
