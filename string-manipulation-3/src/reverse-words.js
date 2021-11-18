/* exported reverseWords */
// psuedocode
// Create storage for the new string
// Create storage for a word that needs to be reversed.
// Starting from the first character of the string, if the current character is not a space add it to the beginnning of a temporary storage for the word.
// Or else add the current word to the new string with a space in order to separate each reversed word.
// Reset the storage once the temporary word is added to the new string.
// Add the final value at the end to ensure the sentence is complete.
// Return the storage created in the first step.

function reverseWords(string) {
  var newString = '';
  var temp = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      temp = string[i] + temp;
    } else {
      newString += temp + ' ';
      temp = '';
    }
  }
  newString += temp;
  return newString;
}
