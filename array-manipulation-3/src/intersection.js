/* exported intersection */
// psuedocode
// Side note: could be similar to unique.js refer to it
// Create storage for the new array.
// Begin to push each value in the first array to the new array only if it DOES exist in the second array.
// If it does not exist in the second array, do not push it since we only want matching values from both the
// first and second array.
// Return the new array.

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
