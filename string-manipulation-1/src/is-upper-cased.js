/* exported isUpperCased */
// pseudocode
// Create storage to compare the word to an all uppercased word
// Return the storage
// If it is true, the return should be true
// If it is false, the return should be false

function isUpperCased(word) {
  var upperCaseTest = word === word.toUpperCase();
  return upperCaseTest;
}
