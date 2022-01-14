/* exported includes */

function includes(list, value) {
  while (list !== null) {
    list = list.next;
    if (list.data === value) {
      return true;
    }
  }
}
