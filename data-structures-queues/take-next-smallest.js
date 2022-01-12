/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (frontValue === undefined) {
    return undefined;
  } else if (secondValue === undefined) {
    return frontValue;
  }
  while (queue.peek() !== undefined) {
    if (frontValue < secondValue) {
      queue.enqueue(secondValue);
      return secondValue;
    }
  }
}
