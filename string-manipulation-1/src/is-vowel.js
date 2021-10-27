/* exported isVowel */
// pseudocode
// List out vowels A, E, I, O, U, a, e, i, o, u
// Create storage for the above list
// If the provided character includes one of these letters then return true
// All other letters should return false
var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
function isVowel(char) {
  return vowels.includes(char);
}
