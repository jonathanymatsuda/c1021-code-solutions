/* exported getLength */

function getLength(list) {
  var counter = 0;
  while (list !== null) {
    list = list.next;
    counter++;
  }
  return counter;
}
