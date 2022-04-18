function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  color: document.querySelector('.color'),
  changeBtn: document.querySelector('.change-color'),
};

refs.changeBtn.addEventListener("click", changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();  
  refs.color.textContent = refs.body.style.backgroundColor;
};
  


