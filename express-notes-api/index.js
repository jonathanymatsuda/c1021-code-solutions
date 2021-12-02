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

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] !== undefined) {
    res.status(200).json(dataObject.notes[id]);
  } else if (dataObject.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  }
});

app.listen(3000, () => {
  // console.log('Listening to port 3000');
});
