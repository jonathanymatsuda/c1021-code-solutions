/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (frontValue === undefined) {
    return undefined;
  } else if (secondValue === undefined) {
    return frontValue;
  }
  if (frontValue <= secondValue) {
    return frontValue;
  }
}
