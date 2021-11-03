/* exported tail */
// pseudocode
// Create list storage within the function or else it will keep adding on the input by user
// Identify the first item in the list and know that everything beyond it will be what we want
// Since we want everything beyond the first item, ignore/skip whatever is in the first position (0)
// Push everything that is greater than position 0 to the storage in step 1
// Return the storage

function tail(array) {
  var tailList = [];
  for (var i = 1; i < array.length; i++) {
    tailList.push(array[i]);
  }
  return tailList;
}
