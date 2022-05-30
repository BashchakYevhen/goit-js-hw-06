

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredListEl = document.querySelector('#ingredients')
const listEl = ingredients.map(elem => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = elem;
  return list;
})

ingredListEl.append(...listEl)