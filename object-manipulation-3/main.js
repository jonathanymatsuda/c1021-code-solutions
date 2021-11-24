console.log('Lodash is loaded:', typeof _ !== 'undefined');
// pseudocode
// Create four player objects in an array.
// 52 card objects:
// Create an array with all the ranks possible for the cards.
// Create an array with all suits possible for the cards.
// Create storage for the deck of 52 card objects.
// In a function create the deck with 52 cards:
// Extract each possible rank suit combination by first going into the rank array and then going into the suit array.
// Take each possible pair and push it to the storage for deck. Your result should be an array of 52 elements.
// Return the deck - (may not need this later on)
// Shuffle deck:
// High level overview: In order to shuffle the deck we essentially want to take the first card in the created deck and replace it with a random
// position
// Within the deck, create temmporary storage for the card that will appear on top (all cards will essentially appear on the top)
// and will get replaced because you have to loop)
// Create a randomizer that will generate a number up to 52
// Replace the card that is on the top position of the deck with whatever position the random number generator generates.
// Set the temporary storage to the storage

// var players = [{name:'Art', hand:}, {name:'Judson', hand:}, {name:'Claire', hand:}, {name:'Dan', hand:}]
// var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace' ]
// var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
// var deck = [];

// function deckCreation() {
//   for (var i = 0; i < rank.length; i++) {
//     for (var j = 0; j < suit.length; j++) {
//       var card = {Rank: rank[i], Suit: suit[j]}
//       deck.push(card)
//     }
//   }
//   return deck;
// }

// function shuffle(deck) {
//   for (var i = 0; i < deck.length; i++) {
//     var temp = deck[i];
//     var randomizer = Math.floor(Math.random() * deck.length);
//     deck[i] = deck[randomizer];
//     deck[randomizer] = temp
//   }
//   return deck
// }

// function deal(name) {

// }

// var test = deckCreation();
// shuffle(test);
