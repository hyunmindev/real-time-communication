const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port);
