/* exported defaults */
// pseudocode
// Side note: do not create new storage like the other challenges because we want to modify the target.
// Obtain the keys in the source object provided by the user.
// If any of these keys equals a key in the target object, keep the key in target object
// If a key in the source object does not equal a key in the target object, add it to the target object.

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
