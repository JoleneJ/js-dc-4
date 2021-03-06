/*

Exercise Two

*/


/*

Two basic event handlers
Discuss Together

*/
// var button = document.querySelector('.content')
// // button.onclick = function () {
// //   console.log('called');
// // }
//
// button.addEventListener('click', function (event) {
//   console.log(event.target);
// })

/*

Writing event handlers
Do Independently, then review together

1. Get the h1 element from the page and save it to a variable called myCounter
2. Declare a variable called counterIndex and set it equal to 0
3. When the page has loaded, set the text of our header to the current value of our counter variable, so the final html is: "<h1>Counter: 0</h1>"
4. Add an event listener to the button on the page so that when it is clicked, the value of counterIndex is incremented by 1 and the new value is added to the page

*/

var myCounter = document.getElementsByTagName('h1')[0]
console.log(myCounter);

var counterIndex = 0

window.onload = function () {
  myCounter.innerText = 'Counter: ' + counterIndex
}

var button = document.querySelector('.js-button')
console.log(button);

button.addEventListener('click', function () {
  counterIndex++
  myCounter.innerText = 'Counter: ' + counterIndex
})
