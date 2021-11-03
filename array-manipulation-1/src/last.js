/* exported last */
// psuedocode
// Identify the item that is last in the list
// Since each list can have a different length obtain the length of the list first.
// Since each list starts counting at 0, subtract 1 from the overall length to get the last item.

function last(array) {
  return array[array.length - 1];
}
