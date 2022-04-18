const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    let length = Number(refs.input.dataset.length);
    
    if (event.currentTarget.value.length !== length) { 
       refs.input.classList.add('invalid');
    } refs.input.classList.add('valid');
}
