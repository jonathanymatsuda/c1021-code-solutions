/* exported swapChars */
// pseudocode
// Create storage for the new swapped string.
// Separate the string value into a list (array) so its easier to rearrange and work with.
// In this new list, take the first index given by the user and swap it with the string's second index.
// Also in the list, take the second index given by the user and swap it with the string's first index.
// Once we have confirmed that the values have swapped, convert the array back to a string and return it.

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  for (var i = 0; i < split.length; i++) {
    if (i === firstIndex) {
      split[i] = string[secondIndex];
    }
    if (i === secondIndex) {
      split[i] = string[firstIndex];
    }
  }
  return split.join('');
}
