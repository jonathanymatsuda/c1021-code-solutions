/* exported swapChars */
// pseudocode
// Create storage for the new swapped string.

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  for (var i = 0; i < split.length; i++) {
    if (i === firstIndex) {
      split[i] = split[secondIndex];
    }
    if (i === secondIndex) {
      split[i] = split[firstIndex];
    }
  }
}
