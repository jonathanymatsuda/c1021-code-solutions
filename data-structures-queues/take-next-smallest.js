/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const frontValue = queue.dequeue();
    if (frontValue <= queue.peek()) {
      return frontValue;
    } else if (frontValue > queue.peek()) {
      queue.enqueue(frontValue);
    } else {
      return frontValue;
    }
  }
}
