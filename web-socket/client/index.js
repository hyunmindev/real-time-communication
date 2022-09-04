const ws = new WebSocket('ws://localhost:3002');

const submitButton = document.querySelector('#submit');
const messageLabel = document.querySelector('#message');
const input = document.querySelector('#input');

ws.addEventListener('message', async (event) => {
  messageLabel.innerText = await event.data.text();
});

submitButton.addEventListener('click', () => {
  ws.send(input.value);
  input.value = '';
});
