const takeAChance = require('./take-a-chance');

const myName = takeAChance('Jonathan');
myName.then(resolve => { return console.log(resolve); });
myName.catch(reject => { return console.log(reject.message); });
