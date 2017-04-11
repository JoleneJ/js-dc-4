/*

Data Modeling

Create a JavaScript object that is modelled off of a car.

Declare a variable and assign your object to it. Give your car at least four
properties, at least one of which is a method.

*/
var Car = {
  Model: 'A8',
  Make: 'Audi',
  Year: 2017,
  Seats: 2,
  Color: 'White',
  mileage : function drive(miles) {
     miles > 50 ? console.log('You drive a lot!') : console.log('You must take public transportation.');
  }

}
