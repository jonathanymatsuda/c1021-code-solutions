/* exported titleCase */
// pseudocode
// Create storage for the new string.

function titleCase(string) {
  var newString = '';
  var splitWord = string.split(' ');
  for (var i = 0; i < splitWord.length; i++) {
    splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1);
    if (splitWord[i].length < 4) {
      splitWord[i] = splitWord[i].toLowerCase();
    }
    if (splitWord[i] === 'javascript' || splitWord[i] === 'Javascript') {
      splitWord[i] = 'JavaScript';
    }
    if (splitWord[i] === 'api') {
      splitWord[i] = 'API';
    }
    newString += splitWord[i] + ' ';
  }
  return newString.trim();
}
