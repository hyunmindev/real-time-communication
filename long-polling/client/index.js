const submitButton = document.querySelector('#submit');
const messageLabel = document.querySelector('#message');
const input = document.querySelector('#input');

const url = 'http://localhost:3000/';

function poll() {
  fetch(url) //
    .then((res) => res.text()) //
    .then((data) => {
      messageLabel.innerText = data;
      poll();
    });
}

poll();

submitButton.addEventListener('click', () => {
  fetch(url, {
    method: 'POST',
    body: input.value,
  });
  input.value = '';
});
