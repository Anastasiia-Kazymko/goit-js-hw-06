const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);


const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};














