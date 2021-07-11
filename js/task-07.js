const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize() {
    const sizeValue = inputRef.value;
    spanRef.style.fontSize = sizeValue + 'px';
}
