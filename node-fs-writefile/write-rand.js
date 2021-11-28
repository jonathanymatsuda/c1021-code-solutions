const fs = require('fs');
const randomNumber = Math.random();
fs.writeFile('random.txt', randomNumber, err => {
  if (err) throw err;
});
