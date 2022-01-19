/* exported maxValue */

function maxValue(stack) {
  let biggestValue = -Infinity;
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    if (currentValue >= biggestValue) {
      biggestValue = currentValue;
    }
  }
  return biggestValue;
}
