/* exported capitalizeWord */
// pseudocoode
// Since the word is randomely capitilzed lowercase the entire word and create stroage for this.
// No matter what, the first character of the word will be a capital letter so capitalize this character and create storage for it.
// Since 'JavaScript' is the outlier detect if the all lowercased word is equal to 'javascript'.
// If it is, return the word 'JavaScript' instead.
// If not, take the first capital letter storage and combine it with the rest of the lowercased word.

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var firstLetter = word.charAt(0).toUpperCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    return firstLetter + lowerCase.slice(1);
  }
}
