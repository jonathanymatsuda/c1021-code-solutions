/* exported difference */
// pseudocode
// Side note: could be similar to unique.js refer to this.
// Create storage for the new array.
// Begin to push each value in the first array to the new array if it does NOT exist in the second array.
// If the value exists in the second array do not push it.
// Begin to push each value in the second array to the new array if it does NOT exist in the first array.
// If the value exists in the first array do not push it.
// Return the new array.

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
