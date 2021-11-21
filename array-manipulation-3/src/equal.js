/* exported equal */
// pseudocode
// Eliminate any array that is not the same length and return false.
// If the arrays are the same length, compare each of the values from each array to the value in the other array.
// If they do not equal return false.
// If they do equal return true. (Side note: Think about where to place this. Should be within the else block but not in the for loop)

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}
