var student = {
  firstName: 'Jonathan',
  lastName: 'Matsuda',
  age: 25
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesinIrvine = false;
student.previousOccupation = 'Sales Engineer';
console.log('value of student.livesinIrvine:', student.livesinIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Type-R',
  year: 2017
};
vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Lenny',
  type: 'Mouse'
};
delete pet.name;
delete pet['type'];
console.log('value of pet:', pet);
