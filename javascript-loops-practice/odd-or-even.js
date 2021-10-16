/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddEvenList = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenList.push('even');
    } else {
      oddEvenList.push('odd');
    }
  }
  return oddEvenList;
}
