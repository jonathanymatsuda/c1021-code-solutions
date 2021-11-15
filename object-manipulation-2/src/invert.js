/* exported invert */
// pseudocode
// Create storage for the new inverted object.
// Extract the values from the source object provided by the user.
// Extract the keys from the source object provided by the user.
// Take the values in the original source and set them as the new key in the nearly created storage.
// Take the keys in the original source and set them as the value to the new keys as mentioned in the previous step. This should also be in the nearly created storage.
// Return the storage from step 1.

function invert(source) {
  var invertObject = {};
  for (var key in source) {
    invertObject[source[key]] = key;
  }
  return invertObject;
}
