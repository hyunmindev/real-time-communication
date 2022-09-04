const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.text());

let message = '';

app.get('/', (req, res) => {
  res.send(message);
});

app.post('/', (req, res) => {
  message = req.body;
  res.sendStatus(200);
});

app.listen(port);
