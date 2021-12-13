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
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
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
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const updateGrade = req.body;
  const grade = Number(updateGrade.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  } else if (!Number.isInteger(grade) || grade < 0 || grade > 100) {
    res.status(400).json({ error: 'score must be valid (0-100)' });
    return;
  } else if (updateGrade.name === undefined || updateGrade.course === undefined || updateGrade.score === undefined) {
    res.status(400).json({ error: 'Must be a valid input' });
    return;
  }
  const values = [updateGrade.name, updateGrade.course, updateGrade.score, gradeId];
  const sql = `
    update "grades"
      set "name"   = $1,
          "course" = $2,
          "score"  = $3
      where "gradeId" = $4
      returning *
  `;
  db.query(sql, values)
    .then(result => {
      const loggedGrade = result.rows[0];
      if (loggedGrade === undefined) {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}` });
      } else {
        res.status(200).json(loggedGrade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  const values = [gradeId];
  const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning *
  `;
  db.query(sql, values)
    .then(result => {
      const loggedGrade = result.rows[0];
      if (loggedGrade === undefined) {
        res.status(404).json({ error: `Cannot find grade with gradeId: ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); //eslint-disable-line
});
