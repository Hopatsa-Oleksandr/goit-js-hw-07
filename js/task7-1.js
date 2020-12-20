// const items = [...document.querySelectorAll('li.item')];
// console.log(items);
// console.log(`В списке ${items.length} категории.`);

// items
//   .map(item => {
//     const title = item.querySelector('h2');
//     const list = item.querySelectorAll('ul li');
//     return {
//       title: title.textContent,
//       count: list.length,
//     };
//   })
//   .forEach(entry => {
//     console.log(
//       'Категория: ',
//       entry.title,
//       '\r\nКоличество Элементов:',
//       entry.count,
//     );
//   });

const categoriesRef = document.querySelector('#categories'),
  itemsCategories = [...categoriesRef.children];
console.log(`В списке ${itemsCategories.length} категории.`);

itemsCategories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const quantityItems = item.querySelectorAll('ul li').length;
  console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
});

// const countRef = document.querySelector('#categories').children.length;
// console.log(`В списке ${countRef} категории.`);
// const arrayItem = document.querySelectorAll('.item');
// arrayItem.forEach(arrayItem =>
//   console.log(
//     `Категория: ${arrayItem.firstElementChild.textContent} Количество элементов: ${arrayItem.lastElementChild.children.length}`,
//   ),
// );

// const items = [...document.querySelectorAll('li.item')];
// console.log(`В списке ${items.length} категории.`);

// itemsCategories.forEach(item => {
//   const title = item.querySelector('h2').textContent;
//   const quantityItems = item.querySelectorAll('ul li').length;
//   console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
// });

// console.log(document.getElementById('categories'));
// console.log(typeof document.getElementById('categories'));

// document.getElementById('categories').innerText = 'Золушка';

// let findElement = document.querySelector('#categories');
// console.log(findElement);
