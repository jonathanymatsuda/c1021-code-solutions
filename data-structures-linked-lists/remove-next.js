/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    delete list.next;
    list.next = list.next.next;
  }
}
