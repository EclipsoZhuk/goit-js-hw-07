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

// Сделано по заданию
const ingredientsEl = ingredients.map(elem => {
    const itemEl = document.createElement('li');
    itemEl.textContent = elem;

    return listRef.append(itemEl);
});

// Рабочая функция

// const makeListIngredients = ingredients => {
//     return ingredients.map(ingredient => {
//         const itemEl = document.createElement('li');
//         itemEl.textContent = ingredient;

//         return itemEl;
//     });
// };
// const elements = makeListIngredients(ingredients);
// listRef.append(...elements);
