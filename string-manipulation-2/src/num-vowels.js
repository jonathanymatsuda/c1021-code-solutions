/* exported numVowels */
// pseudocode
// Create storage for all lowercase and uppercase values.
// Create storage for a counter that will eventually count the number of vowels in a given string.
// For each string if the character is the same as the first storage that was created then add 1 to the second storage that was created.
// If not, do nothing.
// Return the counter at the end for the total amount of vowels.

function numVowels(string) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}
