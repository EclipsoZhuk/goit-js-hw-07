const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);

function onInput({ target: { value } }) {
    // if (value.trim() === '') {
    //   nameOutput.textContent = 'незнакомец';
    // } else {
    //   nameOutput.textContent = value;
    // }
    nameOutput.textContent = value.trim() === '' ? 'незнакомец' : value;
}
