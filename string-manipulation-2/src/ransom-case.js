/* exported ransomCase */
// pseudocode
// Odd position characters are always uppercased.
// Even position characters are always lowercased.
// Create storage for the new alternating uppercase and lowercase string.
// If the position of a character in the given string is odd uppercase that character and add it to new storage.
// If the position of a character in the given string is even lowercase that character and add it to new storage.
// Return new storage.

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
