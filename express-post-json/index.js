const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesData = [];
  for (const property in grades) {
    gradesData.push(grades[property]);
  }
  res.send(gradesData);
});

const expressJSON = express.json();

app.use('/api/grades', expressJSON);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  nextId++;
  grades[nextId] = newGrade;
  res.status(201).send(newGrade);
});

app.listen(3000);
