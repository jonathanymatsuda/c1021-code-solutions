var colors = ['red', 'white', 'blue'];
var colorOne = colors[0];
var colorTwo = colors[1];
var colorThree = colors[2];

console.log('value of colors[0]:', colorOne);
console.log('value of colors[1]:', colorTwo);
console.log('value of colors[3]:', colorThree);
console.log('America is ' + colorOne + ' ' + colorTwo + ' ' + 'and ' + colorThree + '.');

colors[2] = 'green';

console.log('Mexico is ' + colorOne + ' ' + colorTwo + ' ' + 'and ' + colors[2] + '.');
console.log('value of colors:', colors);

var students = ['Emily', 'Jonathan', 'Claire', 'Art'];
var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is ' + lastStudent + '.');
console.log(students);
