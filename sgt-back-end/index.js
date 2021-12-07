const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const jsonMiddleware = express.json();
app.use('/api/grades', jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  const grades = [];
  const sql = `
    select *
      from "grades"
  `;
  grades.push(sql);
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json({ grades });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurrred' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;
  const grade = Number(req.body.score);
  if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
    res.status(400).json({ error: 'score must be valid (0-100)' });
  } else if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined) {
    res.status(400).json({ error: 'Must be a valid input' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ('newGrade.name', 'newGrade.course', 'newGrade.score')
  `;
    db.query(sql)
      .then(result => {
        res.status(201).json({ newGrade });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); //eslint-disable-line
});
