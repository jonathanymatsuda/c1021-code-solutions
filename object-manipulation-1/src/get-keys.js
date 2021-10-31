/* exported getKeys */
// pseudocode
// Pre-req: Identify the keys in the object that must be returned.
// Create storage for the keys.
// Create a storage for the individual key.
// Within the object declared, extract each key.
// Push those keys to the first storage that was created.
// Return that storage.

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
