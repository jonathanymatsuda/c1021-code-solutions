/* exported lastChars */
// pseudocode
// Create storage for the new chunk of the string we want to extract.
// Since we want to take length amount of the last characters, start at the end of the string, count out the length, and begin to extract from that starting point.
// Extract all characters through the end of the string.
// Return the storage.

function lastChars(length, string) {
  var phrase = string.slice(-length, string.length);
  return phrase;
}
