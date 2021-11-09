/* exported firstChars */
// psuedocode
// Create storage for the new chunk of the string we want to extract.
// Since we are getting the length amount of the first characters begin to extract at position 0.
// Stop extracting the characters at the length that would be specified by the user.
// Return the storage created in the first step.

function firstChars(length, string) {
  var phrase = string.slice(0, length);
  return phrase;
}
