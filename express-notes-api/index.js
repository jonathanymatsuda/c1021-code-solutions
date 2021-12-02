const express = require('express');
const app = express();
const dataObject = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in dataObject.notes) {
    notesArray.push(dataObject.notes[property]);
  }
  res.status(200).json(notesArray);
});

app.get();

app.listen(3000, () => {
  // console.log('Listening to port 3000');
});
