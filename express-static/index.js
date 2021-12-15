const express = require('express');
const path = require('path');
const app = express();

const absolute = path.join('__dirname', 'public');
console.log(absolute);

const middleware = express.static('public');
app.use(middleware);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
