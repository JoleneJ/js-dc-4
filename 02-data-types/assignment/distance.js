var x1 = 1, x2=10 , y1 =3 , y2 = 15, deltaX, deltaY

deltaX = x1 - x2
deltaY = y1 - y2
// console.log(deltaX);
// console.log(deltaY);

var squareX = Math.pow(deltaX, 2)
var squareY = Math.pow(deltaY, 2)
// console.log(squareX);
// console.log(squareY);

var square = squareX + squareY
// console.log(square);

var result = Math.sqrt(square)

console.log(result);
