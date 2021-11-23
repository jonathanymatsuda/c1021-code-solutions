/* exported titleCase */
// pseudocode
// Create storage for the new string.
// Turn the string into a list separated by a space.
// Create storage for minor words listed in exercise. For minor words that are 3 characters create both capital and lowercase versions. We are going to have to make
// 3 character words into proper form due to the fact that 'Web' existis in some of the book titles. If there is ever a non minor two letter word we would have to add
// the capital version of the two letter minor word to this array.
// Begin conditions:
// If the word is equal to or greater than 3 then upppercase first letter and keep the rest lowercased.
// If the word Javascript exists return JavaScript.
// If the word JavaScript with a : exists return JavaScript:.
// If the word Api exists return API.
// If any three letter minor word exists in the middle of the book title convert it to lower case.
// However,if the minor word is in the beginning of the title capitilize the first letter and keep the rest lowercased.
// Convert the list back into a string.
// Assign it to the storage created in the first step.
// Turn the storage in the previous step into a list separated by ': '.
// If the length of the list is two (I don't imagine there ever being three : in a book title ??) uppercase the first character of the 2nd item in the list and return
// the rest of the letters as is.
// Convert the list back into a string.
// Assign it to the storage created in the first step.
// Turn thhe storage in the previous step into a list separated by '-'.
// If the length of the list is greater than 1 uppercase the first character of each item in the list and return the rest of the letters as is.
// Convert the list back into a string.
// Assign it to the storage created in the first step.
// Return the storage created in the first step.

function titleCase(string) {
  var newString = '';
  var splitWord = string.split(' ');
  var minorWords = ['And', 'and', 'or', 'Nor', 'nor', 'But', 'but', 'a', 'an', 'The', 'the', 'as', 'at', 'by', 'For', 'for', 'in', 'of', 'on', '"Per', 'per', 'to'];
  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length >= 3) {
      splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1);
    }
    if (splitWord[i] === 'Javascript') {
      splitWord[i] = 'JavaScript';
    }
    if (splitWord[i] === 'Javascript:') {
      splitWord[i] = 'JavaScript:';
    }
    if (splitWord[i] === 'Api') {
      splitWord[i] = 'API';
    }
    if (minorWords.includes(splitWord[i])) {
      splitWord[i] = splitWord[i].toLowerCase();
    }
    if (minorWords.includes(splitWord[0])) {
      splitWord[0] = splitWord[0].charAt(0).toUpperCase() + splitWord[0].slice(1);
    }
    var properCapital = splitWord.join(' ');
    newString = properCapital;
  }
  var splitWordColon = newString.split(': ');
  for (var j = 0; j < splitWordColon.length; j++) {
    if (splitWordColon.length === 2) {
      splitWordColon[1] = splitWordColon[1].charAt(0).toUpperCase() + splitWordColon[1].slice(1);
    }
    var colonJoin = splitWordColon.join(': ');
    newString = colonJoin;
  }
  var splitWordDash = newString.split('-');
  for (var k = 0; k < splitWordDash.length; k++) {
    if (splitWordDash.length > 1) {
      splitWordDash[k] = splitWordDash[k].charAt(0).toUpperCase() + splitWordDash[k].slice(1);
    }
    var dashJoin = splitWordDash.join('-');
    newString = dashJoin;
  }
  return newString;
}
