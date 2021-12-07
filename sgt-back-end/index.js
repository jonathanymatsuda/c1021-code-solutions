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

app.listen(3000, () => {
  console.log('Listening on port 3000'); //eslint-disable-line
});
