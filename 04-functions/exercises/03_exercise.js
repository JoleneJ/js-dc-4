/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/
function average(num1, num2) {
    return ((num1 + num2) / 2)
}

var avg = average(20, 30)
console.log(avg);




/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/

function distance(point1, point2) {
  return (Math.sqrt( Math.pow( point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)))
}

var dist = distance([0,0], [3,7])
console.log(dist);
