/* exported pick */
// pseudocode
// Create storage for the new object.
// Search for defined keys (properties) in the source provided by the user.
// If they match the keys (properties) provided by the user add them with their corresponding value to the storage created in the first step.
// Return the storage created in first step.

function pick(source, keys) {
  var pickObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      pickObject[key] = source[key];
    }
  }
  return pickObject;
}
