const submitButton = document.querySelector('#submit');
const messageLabel = document.querySelector('#message');
const input = document.querySelector('#input');

const url = 'http://localhost:3001/';

function poll() {
  fetch(url) //
    .then((res) => res.text()) //
    .then((data) => {
      messageLabel.innerText = data;
    });
}

setInterval(() => {
  poll();
}, 1000);

submitButton.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    body: input.value,
  });
  input.value = '';
});
