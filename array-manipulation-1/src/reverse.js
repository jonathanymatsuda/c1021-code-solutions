/* exported reverse */
// pseudocode
// Create storage for the reversed list
// Starting at the end of the list, take each item.
// Add those items to the storage created above. Since we are starting at the end of the original list those items would begin to
// be stored in reverse order of that list
// Continue to take each item until the first item of the list.
// Return the reversed list.

function reverse(array) {
  var reverseList = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseList.push(array[i]);
  }
  return reverseList;
}
