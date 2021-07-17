const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// Получение ссылки на тег с id #ingredients
const listRef = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(elem => {
    const itemEl = document.createElement('li');
    itemEl.append(elem);

    return itemEl;
});
listRef.append(...ingredientsEl);
