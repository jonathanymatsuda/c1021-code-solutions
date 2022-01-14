/* exported removeTail */

function removeTail(list) {
  while (list.next !== null) {
    list = list.next;
    if (list.next.next === null) {
      list.next = null;
    }
  }
}
