/* exported toObject */
// pseudocode
// Create storage for the new object.
// Identify the first item of the list at position 0.
// Turn this item into an object key.
// Identify the second item of the list at position 1.
// Turn this item into an object value.
// Take the first item and set it equal to the second item.
// Return the storage.

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
