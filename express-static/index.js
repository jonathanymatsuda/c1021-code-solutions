const express = require('express');
const path = require('path');
const app = express();

const absolute = path.join(__dirname, 'public');

const middleware = express.static(absolute);
app.use(middleware);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
