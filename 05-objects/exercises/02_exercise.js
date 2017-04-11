/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/


/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/

var Car = {
  Model: 'A8',
  Make: 'Audi',
  Year: 2017,
  Seats: 2,
  Color: 'White',
  mileage : function drive(miles) {
     miles>50 ? console.log('You drive a lot!') : console.log('You must take public transportation.')
  }

}

/*

Get one of the properties from your object using dot notation

*/

console.log( Car.Model)

/*

Get one of the properties from your object using bracket notation

*/
console.log( Car['Year'])

/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/
Car.Color = 'Red'

/*

Call your car's method

*/
console.log( Car.mileage(100))
