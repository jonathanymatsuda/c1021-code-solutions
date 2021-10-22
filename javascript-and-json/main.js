var books = [
  {
    isbn: 238214321,
    title: 'Ulysses',
    author: 'James Joyce'
  },
  {
    isbn: 32820181,
    title: 'Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    isbn: 38941282,
    title: 'War and Peace',
    author: 'Leo Tolstoy'
  }
];
console.log('books:', books);
console.log('typeof books:', typeof (books));
var booksJSON = JSON.stringify(books);
console.log('JSON string:', booksJSON);
console.log('type of booksJSON:', typeof (booksJSON));

var student = '{"id": "12345", "name": "Jonathan"}';
console.log('student:', student);
console.log('typeof student:', typeof (student));
var studentJSON = JSON.parse(student);
console.log('JSON student:', studentJSON);
console.log('type of studentJSON:', typeof (studentJSON));
