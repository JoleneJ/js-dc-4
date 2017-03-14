/*

Card Game of War Exercise Part 1.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called
createDeck that will take both as parameters and return a new array
with all 52 possible card combinations. The returned 'Deck of Cards'
shoulkd be an array with 52 strings in it, each representing a card
(i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called
deckOfCards.

*/

function createDeck(suits, ranks) {

  var myDeckOfCards = []
  var i = 0
  // for (var i = 0; i < 53; i++) {
    for(rank in ranks){
      for (var suit in suits) {
        myDeckOfCards[i] = ranks[rank] + ' of ' + suits[suit]
        //console.log(i);
        console.log(myDeckOfCards[i]);
        i++
      }
    }
  //}
  return myDeckOfCards
}

var deckOfCards = createDeck(suits, ranks)
console.log(deckOfCards);

/*

Write a function called getRandomCard that will return one random
card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/
function getRandomCard(deckOfCards) {
  var random = Math.floor((Math.random() * 52) + 1 )
  var randomCard = deckOfCards[random]
  console.log(randomCard);
  return randomCard
}

getRandomCard(deckOfCards)





/*

Write a function called dealHand that takes a number as it's only
parameter. This number represents the number of cards that dealHand
should return.

If no number is passed in, then dealHand should still return one
card. If dealHand is only returning one card, it returns that card
as a string; if dealHand is returning more than one card, it returns
the cards as an array.

*/

function dealHand(num) {
  var array = []
  if(num === 0){
    return getRandomCard(deckOfCards)
  }else {
    for (var i = 0; i < num; i++) {
      array[i] = getRandomCard(deckOfCards)
    }
    return array
  }
}

var hand = dealHand(0)
console.log(hand);


/*

Create two variables, playerOneCards and playerTwoCards, and
initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/
var playerOneCards = []
var playerTwoCards = []

playerOneCards = dealHand(7)
playerTwoCards = dealHand(7)

console.log(playerOneCards);
console.log(playerTwoCards);



/*

Write a function called showHand that takes a player's cards as an
array and prints each card.

*/

function showHand(playerCards) {
  for (var i = 0; i < playerCards.length; i++) {
    console.log('showHand: ', playerCards[i]);
  }
}

showHand(playerOneCards)


/*

Get pumped:
Next class we're going to talk about objects, which will let us
create cards that are easier to use because they contain attributes
like suit and rank. Then, we'll be able to take two random cards and
compare their score with each other!

*/
