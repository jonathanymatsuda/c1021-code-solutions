/* exported isPalindromic */
// pseudocode
// Side note: The way that makes most sense to me is to just have a simple if condition at the end (ex if(string === reverseString))
// Eliminate all spaces from the string and store it.
// Turn this storage into an array so that it is easier to work with and then store it.
// Turn the storage with the array, reverse the letters of it and store it.
// Turn the storage with the reversed letters, transform it back into a string and store it.
// Compare this newly created reversed string with the original string.
// Return true if it matches.
// Return false if it does not match

function isPalindromic(string) {
  var stringNoSpace = string.replaceAll(' ', '');
  var split = stringNoSpace.split('');
  var reverseArray = split.reverse();
  var reverseString = reverseArray.join('');
  if (stringNoSpace === reverseString) {
    return true;
  }
  return false;
}
