/* exported flatten */
// psuedocode
// Create storage for the new array.
// Within the array, extract each individual sub-array or value and store it.
// If it does not equal a sub-array push it to the new array because we would still want to keep those values.
// However, if it is extract each one of those values and push it to the new array.
// Return the new array.

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var currentArray = array[i];
    if (!Array.isArray(currentArray)) {
      newArray.push(currentArray);
    } else {
      for (var j = 0; j < currentArray.length; j++) {
        newArray.push(currentArray[j]);
      }
    }
  }
  return newArray;
}
