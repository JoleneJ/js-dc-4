/*

Exercise 01

*/


/*

document.onreadystatechange -> event

*/

// console.log(document.readyState);
//
document.onreadystatechange = function (){
  console.log(document.readyState);
}

/*

window.onload
Happens last after document complete state
*/

window.onload = function() {
  console.log('window');
}
