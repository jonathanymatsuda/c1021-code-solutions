/* exported getStudentNames */
function getStudentNames(students) {
  var namesList = [];
  for (var i = 0; i < students.length; i++) {
    namesList.push(students[i].name);
  }
  return namesList;
}
