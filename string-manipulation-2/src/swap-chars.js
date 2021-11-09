/* exported swapChars */
// pseudocode
// Create storage for the new swapped string.

function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      string[i] = string[secondIndex];
    } else if (i === secondIndex) {
      string[i] = string[firstIndex];
    }
  }
  swappedString = swappedString + string[i];
  return swappedString;
}
