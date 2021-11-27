console.log('Lodash is loaded:', typeof _ !== 'undefined');
// pseudocode
// Create four player objects in an array.
// 52 card objects:
// Create an array with all the ranks possible for the cards. Set these to number values with the exception of Jack, Queen, King, and Ace. We will
// deal with these later.
// Create an array with all suits possible for the cards.
// Create storage for the deck of 52 card objects.
// In a function create the deck with 52 cards:
// Extract each possible rank suit combination by first going into the rank array and then going into the suit array.
// Take each possible pair and push it to the storage for deck. Your result should be an array of 52 elements.
// Return the deck.
// Shuffle deck:
// High level overview: In order to shuffle the deck we essentially want to take the first card in the created deck and replace it with a random
// position.
// Within the deck, create temmporary storage for the card that will appear on top (all cards will essentially appear on the top
// and will get replaced because you have to loop).
// Create a randomizer that will generate a number up to 52 (length of deck).
// Replace the card that is on the top position of the deck with whatever position the random number generator generates.
// Swap the cards.
// Deal two cards:
// Extract each player object in the player's array.
// Take the top two cards of the shuffled deck and distribute it to the first player (set it equal to the player's object playerHand property).
// Take the next two cards of the deck and distribute it to the second player (set it equal to the player's object playerHand property).
// Take the next two cards of the deck and distribute it to the third player (set it equal to player's object hand property).
// Take the next two cards of the deck and distribute it to the fourth player (set it equal to player's object hand property).
// Return the updated players array.
// Find the winner:
// First we want to calculate the score for each individual player. We will most likely have to create a function with one parameter which is the player name.
// Extract each player object in the player's array since we want to get the score for each individual player.
// Create storage for the score.
// Extract the hand from the player's object and store it.
// Extract the name from the player's object and store it.
// If the player name is equal to the name parameter then:
// 1. Extract the rank from the player's object. This is where the values/cards will be held.
// 2. If any of the cards equal Jack, Queen or King set those to equal the value of 10.
// 3. If any of the cards equal Ace set those to equal the value of 11.
// 4. Add the values together to the storage created for the score.
// Return the storage created for the score.
// Second we want to find the highest score based off our calculation above and generate the winner.
// Call the calculate function for Art and store it.
// Call the calculate function for Judson and store it.
// Call the calculate function for Claire and store it.
// Call the calculate function for Dan and store it.
// Out of the four scores find the highest score and store it.
// If the storage created for the highest score equals the storage for Art's score generate a win message (console.log).
// If the storage created for the highest score equals the storage for Judson's score generate a win message (console.log).
// If the storage created for the highest score equals the storage for Claire's score generate a win message (console.log).
// If the storage created for the highest score equals the storage for Dan's score generate a win message (console.log).

var players = [{ name: 'Art', hand: '' }, { name: 'Judson', hand: '' }, { name: 'Claire', hand: '' }, { name: 'Dan', hand: '' }];
var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var deck = [];

function deckCreation() {
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      var card = { Rank: rank[i], Suit: suit[j] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var temp = deck[i];
    var randomizer = Math.floor(Math.random() * deck.length);
    deck[i] = deck[randomizer];
    deck[randomizer] = temp;
  }
  return deck;
}

const deal = deck => {
  for (let i = 0; i < players.length; i++) {
    const drawedCards = deck.splice(0, 2);
    const player = players[i];
    player.hand = drawedCards;
  }
  return players;
};

const calculateScores = name => {
  for (let i = 0; i < players.length; i++) {
    let sum = 0;
    const player = players[i];
    const playerHand = player.hand;
    const playerName = player.name;
    if (name === playerName) {
      for (let j = 0; j < playerHand.length; j++) {
        const card = playerHand[j];
        if (card.Rank === 'Jack' || card.Rank === 'Queen' || card.Rank === 'King') {
          card.Rank = 10;
        } else if (card.Rank === 'Ace') {
          card.Rank = 11;
        }
        sum += card.Rank;
      }
      return sum;
    }
  }
};

const winner = () => {
  const playerOneScore = calculateScores('Art');
  const playerTwoScore = calculateScores('Judson');
  const playerThreeScore = calculateScores('Claire');
  const playerFourScore = calculateScores('Dan');
  const winningScore = Math.max(playerOneScore, playerTwoScore, playerThreeScore, playerFourScore);
  if (winningScore === playerOneScore) {
    console.log('The winner is Art!');
  } else if (winningScore === playerTwoScore) {
    console.log('The winner is Judson!');
  } else if (winningScore === playerThreeScore) {
    console.log('The winner is Claire!');
  } else if (winningScore === playerFourScore) {
    console.log('The winner is Dan!');
  }
};

var cardDeck = deckCreation();
shuffle(cardDeck);
deal(cardDeck);
winner();
