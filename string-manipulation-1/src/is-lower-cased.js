/* exported isLowerCased */
// pseudocode
// Create storage to compare the word to an all lowercased word
// Return the storage
// If it is true, the return should be true
// If it is false, the return should be false

function isLowerCased(word) {
  var lowerCaseTest = word === word.toLowerCase();
  return lowerCaseTest;
}
