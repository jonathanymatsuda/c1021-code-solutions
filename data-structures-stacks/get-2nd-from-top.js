/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const topElement = stack.pop();
  if (topElement === undefined) {
    return undefined;
  }
  const secondFromTop = stack.peek();
  stack.push(topElement);
  return secondFromTop;
}
