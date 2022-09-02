const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.text());

const sessions = [];

app.get('/', (req, res) => {
  sessions.push(res);
});

app.post('/', (req, res) => {
  sessions.forEach((session) => {
    session.send(req.body);
  });
  sessions.length = 0;
  res.sendStatus(200);
});

app.listen(port);
