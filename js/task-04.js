// const valueRef = document.querySelector('#value');
// const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
// const buttonIncrementRef = document.querySelector('[data-action="increment"]');

// let currentCounterValue = 0;

// const incrementСurrentValue = () => {
//     currentCounterValue += 1;
//     valueRef.textContent = currentCounterValue;
// };

// const decrementСurrentValue = () => {
//     currentCounterValue -= 1;
//     valueRef.textContent = currentCounterValue;
// };

// buttonDecrementRef.addEventListener('click', decrementСurrentValue);
// buttonIncrementRef.addEventListener('click', incrementСurrentValue);

const [buttonDec, value, buttonInc] =
    document.querySelector('#counter').children;

const increment = () => (value.textContent = +value.textContent + 1);

const decriment = () => (value.textContent -= 1);

buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decriment);
