// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
const itemGallery = document.querySelector('#categories').children.length;
console.log(`В списке ${itemGallery} категории`);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
const itemsRef = document.querySelectorAll('.item');
for (const item of itemsRef) {
    console.log('Категория: ', item.firstElementChild.textContent);
    console.log(
        'Количество элементов: ',
        item.lastElementChild.children.length,
    );
}
