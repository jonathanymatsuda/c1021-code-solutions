const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

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

const jsonMiddleware = express.json();
app.use('/api/grades', jsonMiddleware);

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;
  const grade = Number(newGrade.score);
  if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
    res.status(400).json({ error: 'score must be valid (0-100)' });
    return;
  } else if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined) {
    res.status(400).json({ error: 'Must be a valid input' });
    return;
  }
  const values = [newGrade.name, newGrade.course, newGrade.score];
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

// app.put('/api/grades/:gradeId', (req, res, next) => {
//   const gradeId = Number(req.params.gradeId);
//   const newGrade = req.body;
//   const grade = Number(newGrade.score);
//   if (!Number.isInteger(gradeId) || gradeId <= 0) {
//     res.status(400).json({ error: 'gradeId must be a positive integer' });
//   } else if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
//     res.status(400).json({ error: 'score must be valid (0-100)' });
//   } else if (newGrade.name === undefined || newGrade.course === undefined || newGrade.score === undefined) {
//     res.status(400).json({ error: 'Must be a valid input' });
//   }
//   const values = [newGrade.name, newGrade.course, newGrade.score];
//   const sql = `
//     update "grades"
//       set "name" = $1
//           "course" = $2
//           "score" = $3
//   `
// );

app.listen(3000, () => {
  console.log('Listening on port 3000'); //eslint-disable-line
});
