/* exported capitalize */
// pseudocode
// - Identify if there are any other capital letters in the word
// - If there are, create storage for entire lowercased word
// - Identify where the first character of the word or phrase is
// - Create storage for the first character
// - Capatilize the first character
// - Combime the first character storage with the rest of the lowercased letters
// - Return the output

function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word.charAt(0);
  return firstLetter.toUpperCase() + lowerCase.slice(1);
}
