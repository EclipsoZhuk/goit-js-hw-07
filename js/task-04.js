const valueRef = document.querySelector('#value');
const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');

let currentCounterValue = 0;

const incrementСurrentValue = () => {
    currentCounterValue += 1;
    valueRef.textContent = currentCounterValue;
};

const decrementСurrentValue = () => {
    currentCounterValue -= 1;
    valueRef.textContent = currentCounterValue;
};

buttonDecrementRef.addEventListener('click', decrementСurrentValue);
buttonIncrementRef.addEventListener('click', incrementСurrentValue);
