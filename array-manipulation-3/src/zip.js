/* exported zip */
// pseudocode
// Create storage for the new array.
// The tests only account for arrays with the least amount of values meaning that any extra value from either array without a matching pair can be eliminated.
// Eliminate the extra value from the first array if it is longer than the second array.
// Eliminare the exrra value from the second array if it is longer than the first array.
// Now that they are the same length, extract a value from the first array.
// Extract a value from the second array in that same position.
// Push it to the storage created in the first step.
// Execute this until each value in both arrrays have been pushed.
// Return the storage created in the first step.

function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    first.splice(first.length - 1, 1);
  }
  if (second.length > first.length) {
    second.splice(second.length - 1, 1);
  }
  for (var i = 0; i < first.length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
