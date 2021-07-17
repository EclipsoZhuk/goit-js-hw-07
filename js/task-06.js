const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInput);

function onInput({ target: { value, dataset } }) {
    // if (inputRef.value.length === +inputRef.dataset.length) {
    //     togleClass('valid', 'invalid');
    // } else {
    //     togleClass('invalid', 'valid');
    // }
    value.length === +dataset.length
        ? togleClass('valid', 'invalid')
        : togleClass('invalid', 'valid');
}

const togleClass = (add, remove) => {
    inputRef.classList.remove(remove);
    inputRef.classList.add(add);
};
