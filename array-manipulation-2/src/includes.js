/* exported includes */
// pseudocode
// Identify the value given by the user.
// If any item in the list is equal to this value return true.
// If no items in this list are equal to this value return false.

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
