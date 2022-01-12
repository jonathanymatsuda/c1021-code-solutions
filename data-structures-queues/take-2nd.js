/* exported take2nd */

function take2nd(queue) {
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (frontValue === undefined) {
    return undefined;
  } else if (secondValue === undefined) {
    return frontValue;
  }
  queue.enqueue(frontValue);
  return secondValue;
}
