function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var secondsResult = convertMinutesToSeconds(5);
console.log('converMinutesToSeconds:', secondsResult);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}

var greetingResult = greet('Jonathan');
console.log('greeting:', greetingResult);

function getArea(width, height) {
  var getArea = width * height;
  return getArea;
}

var getAreaResult = getArea(17, 42);
console.log('getArea: ', getAreaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
});
console.log('getFirstName:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement: ', getLastElementResult);
