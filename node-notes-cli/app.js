const fs = require('fs');
const dataParsed = require('./data.json');

function read() {
  for (const property in dataParsed.notes) {
    console.log(`${property}: ${dataParsed.notes[property]}`);
  }
}

function create() {
  dataParsed.notes[dataParsed.nextId] = process.argv[3];
  dataParsed.nextId++;
  fs.writeFile('./data.json', JSON.stringify(dataParsed, null, 2), err => {
    if (err) throw err;
  });
}

function remove() {
  for (const property in dataParsed.notes) {
    if (process.argv[3] === property) {
      delete dataParsed.notes[property];
    }
  }
  fs.writeFile('./data.json', JSON.stringify(dataParsed, null, 2), err => {
    if (err) throw err;
  });
}

function update() {
  for (const property in dataParsed.notes) {
    if (process.argv[3] === property) {
      dataParsed.notes[property] = process.argv[4];
    }
  }
  fs.writeFile('./data.json', JSON.stringify(dataParsed, null, 2), err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  create();
} else if (process.argv[2] === 'delete') {
  remove();
} else if (process.argv[2] === 'update') {
  update();
}
