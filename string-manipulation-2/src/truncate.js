/* exported truncate */
// pseudocode
// Create storage for the truncated string.
// Since we want the beginning of the string, we can include the string starting at the first letter (position 0).
// Then, we want to take all the characters up to the length that will be defined by the user.
// Once we have the characters, that we want add the ellipsis to those characters.
// Return that value.

function truncate(length, string) {
  var truncated = string.slice(0, length);
  return truncated + '...';
}
