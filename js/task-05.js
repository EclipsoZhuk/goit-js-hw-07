const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

// 1 способ
//
refs.nameInput.oninput = event => {
    if (refs.nameInput.value === '') {
        refs.nameOutput.textContent = 'незнакомец';
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
};

// 2 способ
//
// refs.nameInput.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     if (refs.nameInput.value === '') {
//         refs.nameOutput.textContent = 'незнакомец';
//     } else {
//         refs.nameOutput.textContent = event.currentTarget.value;
//     }
// }
