/* exported takeRight */
// psuedocode
// Create new storage for the array.
// Since we want to take (keep) everything to the right start by counting from the end of the list. Count as many spaces as the 'count' number given by the user.
// Then, knowing that we want to extract everything from the right, keep everything through the end of the list. You can calculate the position for this by calculating
// the entire length of the array.
// Return the storage created in the first step.

function takeRight(array, count) {
  var newArray = array.slice(-count, count.length);
  return newArray;
}
