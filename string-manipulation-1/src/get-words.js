/* exported getWords */
// psuedocode
// Create storage for the words
// Identify if there are spaces
// If there are spaces, take the current word up until that space and place it in storage
// Otherwise, recognize the space and move onto the next character
// Return the storage

var wordList = [' '];
// var word = '';
function getWords(string) {
  if (string === []) {
    return wordList;
  } else {
    return string.split(' ');
  }
}

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] !== '') {
//       word += string[i];
//     } else {
//       wordList.push(word);
//       word = '';
//     }
//   }
//   return wordList;
// }
