'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const makeListItems = ingredients => {
  return ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
  });
};
const items = makeListItems(ingredients);
listEl.append(...items);

// 'use strict';
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const listAdd = document.querySelector('#ingredients');

// const makeListItems = ingredients => {
//   return ingredients.map(ingredients => {
//     const listItemAdd = document.createElement('li');
//     listItemAdd.textContent = ingredients;
//     return listItemAdd;
//   });
// };
// const items = makeListItems(ingredients);
// listAdd.replaceWith(...items);
