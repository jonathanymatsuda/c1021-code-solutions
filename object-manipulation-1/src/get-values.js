/* exported getValues */
// pseudocode
// Pre-req: Identify the values in the object that need to be returned.
// Create storage for the values list.
// Declare storage for the keys within the object.
// Extract the values within the object by using the object and keys.
// Add those values to the storage decalared in the first step.
// Return that storage.

function getValues(object) {
  var values = [];
  for (var keys in object) {
    values.push(object[keys]);
  }
  return values;
}
