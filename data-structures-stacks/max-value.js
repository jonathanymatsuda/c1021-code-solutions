/* exported maxValue */

function maxValue(stack) {
  const tempValueHold = [];
  while (stack.peek() !== undefined) {
    tempValueHold.push(stack.pop());
  }
  return Math.max(...tempValueHold);
}
