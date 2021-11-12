/* exported chunk */
// psuedocode - without slice
// Create storage to hold sub-lists.
// The biggest wildcard is if the empty list could have a remainder tied to it. We should start by addressing this.
// Extract the last elemenet chunk in the storage.
// If the last element is undefined (non-existent) or it equals to the size given by the user push the chunk into storage created in the beginning.
// If it does exist, just push that element into the storage.
// Return the storage created in first step.

function chunk(array, size) {
  var separatedArray = [];
  for (var i = 0; i < array.length; i++) {
    var remainder = separatedArray[separatedArray.length - 1];
    if (typeof remainder === 'undefined' || remainder.length === size) {
      separatedArray.push([array[i]]);
    } else {
      remainder.push(array[i]);
    }
  }
  return separatedArray;
}
