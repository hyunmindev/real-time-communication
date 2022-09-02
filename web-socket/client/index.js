const ws = new WebSocket('ws://localhost:3002');

const submitButton = document.querySelector('#submit');
const messageLabel = document.querySelector('#message');
const input = document.querySelector('#input');

ws.addEventListener('open', () => {
  console.log('hi');
});

ws.addEventListener('message', (event) => {
  console.log('message', event.data);
});

submitButton.addEventListener('click', () => {
  ws.send(input.value);
  input.value = '';
});
