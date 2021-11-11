/* exported capitalizeWords */
// psuedocode
// Convert the whole text to lowercase.
// Separate each word out.
// Within each word uppercase the first letter (at position 0).
// Then, join that with the remaining lowercased letters.
// Take the words, combine them with a space and return it.

function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var separation = lowerCase.split(' ');
  for (var i = 0; i < separation.length; i++) {
    separation[i] = separation[i].charAt(0).toUpperCase() + separation[i].slice(1);
  }
  return separation.join(' ');
}
