const createButtonRef = document.querySelector('[data-action="render"]');
const clearButtonRef = document.querySelector('[data-action="destroy"]');
const divBoxRef = document.querySelector('#boxes');

const getValue = () => {
    const amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
};

const createBoxes = amount => {
    let size = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let newSize = size + i * 10;
        const divRef = document.createElement('div');
        divRef.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        fragment.appendChild(divRef);
    }
    divBoxRef.appendChild(fragment);
};

const destroyBoxes = () => {
    divBoxRef.innerHTML = '';
    document.querySelector('#input').value = '';
};

function randomColor() {
    return Math.floor(Math.random() * 256);
}

createButtonRef.addEventListener('click', getValue);
clearButtonRef.addEventListener('click', destroyBoxes);
