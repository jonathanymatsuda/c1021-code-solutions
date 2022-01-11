/* exported countValues */

function countValues(stack) {
  const tempValueHold = [];
  while (stack.peek() !== undefined) {
    tempValueHold.push(stack.pop());
  }
  return tempValueHold.length;
}
