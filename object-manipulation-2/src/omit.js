/* exported omit */
// pseudocode
// Create storage for the new object.
// Search for keys (properties) in the source provided by the user.
// If they DO NOT match the keys (properties) provided by the user, add them with their corresponding value to the storage created in the first step.
// Return the storage created in the first step.

function omit(source, keys) {
  var omitObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      omitObject[key] = source[key];
    }
  }
  return omitObject;
}
