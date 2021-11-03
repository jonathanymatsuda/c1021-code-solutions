/* exported compact */
// pseudocode
// Side note before beginning: all values we want to eliminate are considered falsy values this will be important
// Create new storage for the list within the function the the user's inputs won't keep getting added.
// If the item in the array is not false, null, NaN, 0, -0, undefined, or '' then add it to the storage.
// All items that are false, null, NaN, 0 -0, undefined or '' will not be added to storage.
// Return the list.

function compact(array) {
  var list = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      list.push(array[i]);
    }
  }
  return list;
}
