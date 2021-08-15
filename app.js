const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Charu this is your first azure container!!!');
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
