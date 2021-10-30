/* exported initial */
// psuedocode
// Create storage for the new list within the function or else each user input will continue to be added onto the previous.
// Identify the last item of the list.
// Since we want everything but the last item subtract 1 from the length of the list since each item starts at position 0.
// As long as the position of each item is less than the length of the list subtracted by 1 add that item to the storage created previously. This will prevent
// the last item from being stored.
// Return storage.

function initial(array) {
  var initialList = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      initialList.push(array[i]);
    }
  }
  return initialList;
}
