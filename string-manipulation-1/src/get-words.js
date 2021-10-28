/* exported getWords */
// psuedocode
// Identify the words have space between them
// Separate the words that have a space and put them in a list
// If there are no spaces put the single word in a list
// If the above two steps are not applicable and there are no words return a empty list

function getWords(string) {
  if (string) {
    return string.split(' ');
  } else {
    return string.split('');
  }
}
