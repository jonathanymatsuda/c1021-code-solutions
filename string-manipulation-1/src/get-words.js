/* exported getWords */
// psuedocode
// Identify if the provided words have spaces between them.
// Separate the words that have a space and put them in a list.
// If there are no spaces put the single word in a list.
// Side note: If the above two steps are not applicable and there are no provided words return a empty list.

function getWords(string) {
  if (string) {
    return string.split(' ');
  } else {
    return [];
  }
}
