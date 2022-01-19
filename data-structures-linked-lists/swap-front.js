/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const currentListData = list.data;
    const listNextData = list.next.data;
    list.data = listNextData;
    list.next.data = currentListData;
    return list;
  } else {
    return list;
  }
}
