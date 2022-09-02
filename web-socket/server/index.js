const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');

const app = express();
const port = 3002;

app.use(cors());

const server = app.listen(port);
const wss = new WebSocketServer({ server });

const clients = [];

wss.on('connection', (ws) => {
  clients.push(ws);
  ws.on('message', (data) => {
    clients.forEach((client) => {
      client.send(data.toString());
    });
  });
});
