/* exported takeSmaller */

function takeSmaller(queue) {
  const frontValue = queue.dequeue();
  const secondValue = queue.dequeue();
  if (frontValue === undefined) {
    return undefined;
  } else if (secondValue === undefined) {
    return frontValue;
  }
  if (frontValue > secondValue) {
    queue.enqueue(frontValue);
    return secondValue;
  } else if (secondValue > frontValue) {
    queue.enqueue(secondValue);
    return frontValue;
  } else if (frontValue === secondValue) {
    queue.enqueue(frontValue);
    return secondValue;
  }
}
