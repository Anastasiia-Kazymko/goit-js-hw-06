const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageEl1 = document.createElement('img');
imageEl1.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl1.alt = 'White and Black Long Fur Cat';
imageEl1.width = 540;
const itemEl = document.createElement('li');
itemEl.append(imageEl1);

const imageEl2 = document.createElement('img');
imageEl2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imageEl2.width = 540;
const itemEl2 = document.createElement('li');
itemEl2.append(imageEl2);

const imageEl3 = document.createElement('img');
imageEl3.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imageEl3.alt = 'Group of Horses Running';
imageEl3.width = 540;
const itemEl3 = document.createElement('li');
itemEl3.append(imageEl3);

const listEl = document.querySelector('ul');
listEl.append(itemEl, itemEl2, itemEl3);
console.log(listEl);