/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topElement = stack.pop();
  if (topElement === undefined) {
    return undefined;
  }
  stack.push(value);
  stack.push(topElement);
}
