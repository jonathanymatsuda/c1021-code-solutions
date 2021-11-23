/* exported isAnagram */
// psuedocode
// Eliminate all spaces from the first string and store it.
// Eliminate all spaces from the second string and store it.
// Use the storage in first step and turn it into an array so it is easier to work with.
// Use the storage in the second step and turn it into an array so it is easier to work with.
// Side note: Now we want to somehow store these arrays with the letters in the same exact order. There has to be some consistency so we can compare it.
// Sort the first stored array in alphabetical order and store it.
// Sort the second stored array in alphabetical order and store it.
// Take the alphabitized first storage, transform it back into a string, and store it.
// Take the alphabitized second storage, transform it back into a string, and store it.
// Compare the newly created first string with the newly created second string.
// Return true if it matches.
// Return false if it does not match.

function isAnagram(firstString, secondString) {
  var noSpaceFirstString = firstString.replaceAll(' ', '');
  var noSpaceSecondString = secondString.replaceAll(' ', '');
  var splitFirstString = noSpaceFirstString.split('');
  var splitSecondString = noSpaceSecondString.split('');
  var sortFirstString = splitFirstString.sort();
  var sortSecondString = splitSecondString.sort();
  var orderedFirstString = sortFirstString.join();
  var orderedSecondString = sortSecondString.join();
  if (orderedFirstString === orderedSecondString) {
    return true;
  }
  return false;
}
