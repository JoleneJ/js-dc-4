/*
  For Loops
  In-class Exercise #1
  Code independently, then together
*/

// Create a variable called `age` and assign a number to it
var age = 34

// Using just an `if` statement, if age is less than 18, `console.log` 'You do not pass go'
if(age < 18){
   console.log('You do not pass go!');}

// Using an `if/else` statement, if age is over 18, `console.log` 'thank you for smoking', otherwise `console.log` 'smoking is bad for you anyway'.
if(age > 18){
  console.log('Thank you for not smoking :-)');
}
else {
  console.log('smoking is bad for you anyway');
}

// Using an `else if` statement, if age is greater than 18, `console.log` 'you may enter the castle'; if age is 17, `console.log` 'come back in a few months'; otherwise, `console.log` 'you are not old enough to enter this castle'
age = 17

if(age > 18){
  console.log('you may enter the castle');
}
else if (age === 17) {
  console.log('come back in a few months');
}
else {
  console.log('you are not old enough to enter this castle!');
}

// Using a ternary statement, if age is greater than 18, `console.log` 'you can come in'; otherwise, `console.log` 'you have to be 18 an older to come in here'
age = 34
age > 18 ? console.log('you can come in') : console.log('you have to be 18 and older to enter');
