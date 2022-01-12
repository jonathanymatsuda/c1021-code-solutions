/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let i = 0; i < index; i++) {
    const currentFrontValue = queue.dequeue();
    queue.enqueue(currentFrontValue);
  }
  const frontValue = queue.dequeue();
  return frontValue;
}
