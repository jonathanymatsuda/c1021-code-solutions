/* exported take */
// pseudocode
// Create storage for the new extracted array.
// Since we want to take the first words/letters from the array start extracting at position 0.
// Given the 'count' number, stop extracting items through this number.
// Return the storage created in step 1.

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
