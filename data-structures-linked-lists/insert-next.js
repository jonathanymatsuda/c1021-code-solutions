/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  if (list.next !== undefined) {
    list.next = new LinkedList(value);
    return list.next;
  }
}
