/* exported getLastChar */
// pseudocode
// - Identify how long the word is to start with by starting from 0.
// - Once the word length is identified, identify where the last character is. Since we started at 0 we have to subtract 1 from the length to be
// accurate.
// - Return the last character.
function getLastChar(string) {
  return string[string.length - 1];
}
