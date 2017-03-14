/*

Card Game of War Exercise Part 2.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/


/*

Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/

function Card(suit, rank, score) {
    randomSuit = Math.floor(Math.random() * 4)
    randomRank = Math.floor(Math.random() * 13)
    var suits = ['hearts', 'clubs', 'spades', 'diamonds']
    var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

    this.suit = suit || suits[randomSuit]
    this.rank = rank || ranks[randomRank]
    this.score = score || (randomRank + 1)
    this.title = this.rank + ' of ' + this.suit
  }

var newCard = new Card()
console.log(newCard);

/*

Write a constructor function for a deck of cards. The deck should contain a property `cards` that is an array of the cards in the current deck.

Your deck should contain a method called `createNewDeck` that will populate the `cards` array with all 52 card posibilities, using your card object from above. Someone should not be able to create a new deck of 52 cards if the deck's `cards` array already has cards in it

*/

function deckOfCards(ranks, suits) {
  this.cards = []
  console.log('deck of cards creation');
  this.createNewDeck = function(){
    var i = 0
    console.log('Card length:');
     if(this.cards.length === 0)
     {
      console.log('in the if');
      for (var rank in ranks) {
        for (var suit in suits) {
          this.cards[i] = ranks[rank] + ' of ' + suits[suit]
          i++
        }
      }
     }
    return this.cards
  }
}

var hand1 = new deckOfCards(ranks, suits)
var hand2 = new deckOfCards(ranks, suits)
console.log(hand1.createNewDeck());
console.log(hand2.createNewDeck());
/*

Write a constructor function called player. A player should have a username that is a string and a hand that is an array of cards.

Instantiate two instances of your player object.

*/

function player(username, hand) {
  this.username = username
  this.hand = hand
}


var myCards = new player('Jolene', hand1.cards)
var yourCards = new player('Rich', hand2.cards)

console.log(myCards);
console.log(yourCards);
/*

Get pumped:
For our lab, we're going to have two mini lessons: one on `npm`, which stands for node package manager and installing 3rd party libraries, perhaps to help us handle user input; the second will be on breaking our program into multiple files.

After that, we'll finish building out the game and you'll actually be able to play it!

*/
