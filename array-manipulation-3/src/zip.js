/* exported zip */
// pseudocode
// Create storage for the new array.
// The tests only account for arrays with the least amount of values.
// Take the array with the shortest length and be sure to only push values for both arrays up to that length.
// Now that they are the same length, extract a value from the first array.
// Extract a value from the second array in that same position.
// Push it to the storage created in the first step.
// Execute this until each value in both arrrays have been pushed.
// Return the storage created in the first step.

function zip(first, second) {
  var newArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
