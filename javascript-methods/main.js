var exNumberOne = 30;
var exNumberTwo = 60;
var exNumberThree = 12;
var maximumValue = Math.max(exNumberOne, exNumberTwo, exNumberThree);

console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Hulk', 'Spiderman', 'Black Panther'];
var randomNumber = Math.random();
randomNumber += randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'Mere Christianity',
    author: 'C.S. Lewis'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libraryResult: ', library);

var fullName = 'Jonathan Matsuda';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var sayMyName = firstAndLastName[0].toUpperCase();

console.log('sayMyName', sayMyName);
