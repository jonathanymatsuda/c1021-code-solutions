/* exported isVowel */
// pseudocode
// List out vowels A, E, I, O, U, a, e, i, o, u. You must include both capital and lowercase letters.
// Create storage for the above list.
// If the character provided includes one of these letters in the storage from above then return true.
// All other letters should return false.
function isVowel(char) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}
