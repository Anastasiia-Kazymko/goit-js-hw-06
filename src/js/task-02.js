const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul')

const ingredientEl1 = document.createElement('li');
ingredient1.textContent = 'Potatoes';
ingredient1.classList.add('item');

const ingredientEl2 = document.createElement('li');
ingredient2.textContent = 'Mushrooms';
ingredient2.classList.add('item');

const ingredientEl3 = document.createElement('li');
ingredient3.textContent = 'Garlic';
ingredient3.classList.add('item');

const ingredientEl4 = document.createElement('li');
ingredient4.textContent = 'Tomatos';
ingredient4.classList.add('item');

const ingredientEl5 = document.createElement('li');
ingredient5.textContent = 'Herbs';
ingredient5.classList.add('item');

const ingredientEl6 = document.createElement('li');
ingredient6.textContent = 'Condiments';
ingredient6.classList.add('item');


listEl.append(ingredientEl1, ingredienEl2, ingredientEl3, ingredientEl4, ingredientEl5, ingredientEl6);