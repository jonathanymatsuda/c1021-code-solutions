/* exported dropRight */
// pseudocode
// Create storage for the new extracted array.
// Since we want to drop (delete) everything on the right of the list. Start extracting at position 0.
// Then, take the 'count' number and begin counting from the end of the list.
// Delete everything that is included in this count. This will give you the items you want to extract and keep.
// Return the storage created in the first step.

function dropRight(array, count) {
  var newArray = array.slice(0, -count);
  return newArray;
}
