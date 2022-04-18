let counterValue = 0;

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')

decrBtn.addEventListener('click', decrement);
incrBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;  
    value.textContent = counterValue;
}
function increment() {
    counterValue += 1; 
    value.textContent = counterValue;
}
