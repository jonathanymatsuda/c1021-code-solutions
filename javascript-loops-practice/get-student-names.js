/* exported getStudentNames */
function getStudentNames(students) {
  var namesList = [];
  for (var key in students) {
    namesList.push(students[key]);
  }
  return namesList;
}
