/* exported defaults */
// pseudocode

function defaults(target, source) {
  for (var sKey in source) {
    var sourceKey = sKey;
  }
  for (var tKey in target) {
    var targetKey = tKey;
  }
  if (targetKey === sourceKey) {
    targetKey = target[targetKey];
  } else {
    Object.assign(target, source);
  }
}
