/* exported ransomCase */
// pseudocode
// Odd position characters are always uppercased.
// Even position characters are always lowecased.
//

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string[i]; i++) {
    if (i % 2 !== 0) {
      var upperCase = string[i].toUpperCase();
    } else {
      var lowerCase = string[i].toLowerCase();
    }
  }
  newString = newString + lowerCase + upperCase;
  return newString;
}
