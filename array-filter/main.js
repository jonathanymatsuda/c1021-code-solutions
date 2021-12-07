const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});
console.log('array of evenNumbers:', evenNumbers);

const overFive = numbers.filter(number => {
  return number > 5;
});
console.log('array of overFive:', overFive);

const startWithE = names.filter(name => {
  return name.startsWith('E', 0);
});
console.log('array of startsWithE ', startWithE);

const haveD = names.filter(name => {
  return name.toLowerCase().includes('d');
});
console.log('array of haveD', haveD);
