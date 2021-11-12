/* exported drop */
// pseudocode
// Create new storage for the extracted list of items.
// Since we want to extract everything from the given 'count' number, start extracting items at this point.
// Stop extracting through the end of the list. You can get this number by calculating the length of the overall list.
// Return the storage created in the first step.

function drop(array, count) {
  var newArray = array.slice(count, count.length);
  return newArray;
}
