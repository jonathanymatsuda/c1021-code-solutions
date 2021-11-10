/* exported pick */
// pseudocode

function pick(source, keys) {
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === source[keys]) {
      return source.keys;
    }
  }
}
