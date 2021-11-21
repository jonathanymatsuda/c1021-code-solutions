/* exported union */
// pseudocode
// Side note: Could be very similar to unique.js reference that
// Create storage for the new array.
// Begin to push each value in the first array to the new array only if it does NOT exist in the new array.
// If it already exists in the new array do not push it.
// Begin to push each value in the second array to the new array only if it does NOT exist in the new array.
// If it already exists in the new array do not push it.
// Doing it in the above order will ensure that the new array will contain unique values from both the first and second array
// in the order they appear.
// Return the new array.

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
