const refs = {
input: document.querySelector('#font-size-control'),
text: document.querySelector('#text'),
};

refs.input.addEventListener('input', fontSizeControl);

function fontSizeControl() {
      refs.text.style.fontSize = `${refs.input.value}px`;
};

