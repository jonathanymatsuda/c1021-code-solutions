/* exported unique */
// psuedocode
// Create storage for the new array.
// Begin to push each value in the original array to the new array only if it does NOT exist in the new array.
// If it already exists in the new array do not push it.
// Return the new array.

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
