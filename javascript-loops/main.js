/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 0;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 0;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('value ', string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var val in object) {
    values.push(object[val]);
  }
  return values;
}
