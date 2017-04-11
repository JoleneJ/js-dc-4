/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/

// Create an array with the names 'curly', 'lary' and 'moe'
var stooges = ['curly', 'lary', 'moe']

/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/
// var i = 0
// while (i < stooges.length){
//   console.log(stooges[i]);
//   i++
// }

/*
Create a simple while loop that iteratoes over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/
// var i = 0
// while (i < stooges.length) {
//   if(stooges[i] === 'curly'){
//     console.log('curly is the best');
//   } else {
//       console.log(stooges[i], 'is one of the 3 stooges');
//   }
//   i++
// }

// Create a `do while` loop that does the same as the above
var i = 0
do {
  if(stooges[i] === 'curly'){
    console.log('curly is the best');
  } else {
      console.log(stooges[i]);
  }
  i++
} while (i < stooges.length);
