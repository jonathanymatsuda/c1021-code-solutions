/* exported reverseWord */
// pseudocode
//

var reverseString = '';
function reverseWord(word) {
  for (var i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}
