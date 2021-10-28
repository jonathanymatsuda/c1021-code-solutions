/* exported reverseWord */
// pseudocode
// Create storage for the reversed word inside the function or else it will keep adding the reveresed words.
// Start at the last character and add that character to the storage.
// Add each character to the storage until the first character of the word is added to the storage.
// Once all the characters are added to storage return the storage for the reversed word.

function reverseWord(word) {
  var reverseString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}
