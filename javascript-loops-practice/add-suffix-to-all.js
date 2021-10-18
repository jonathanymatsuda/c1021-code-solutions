/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var appendedSuffix = [];
  for (var i = 0; i < words.length; i++) {
    var word = (words[i]);
    appendedSuffix.push(word + suffix);

  }
  return appendedSuffix;
}
