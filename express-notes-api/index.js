const express = require('express');
const app = express();
const dataObject = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in dataObject.notes) {
    notesArray.push(dataObject.notes[property]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (Number.isInteger(id) && id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] !== undefined) {
    res.status(200).json(dataObject.notes[id]);
  } else if (dataObject.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  }
});

const jsonMiddleware = express.json();
app.use('/api/notes', jsonMiddleware);

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (newNote.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    newNote.id = dataObject.nextId;
    dataObject.notes[dataObject.nextId] = newNote;
    dataObject.nextId++;
    fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataObject.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else if (dataObject.notes[id] !== undefined) {
    delete dataObject.notes[id];
    fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const updatedNote = req.body;
  const id = req.params.id;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (updatedNote.content === undefined) {
    res.status(400).json({ error: 'content is a required field ' });
  } else if (updatedNote.content !== undefined && dataObject.notes[id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else if (updatedNote.content !== undefined && dataObject.notes[id] !== undefined) {
    dataObject.notes[id] = updatedNote;
    dataObject.notes[id].id = updatedNote.id;
  } fs.writeFile('./data.json', JSON.stringify(dataObject, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(200).json(updatedNote[id]);
    }
  });
});

app.listen(3000, () => {
  // console.log('Listening to port 3000');
});
