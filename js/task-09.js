function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');

const colorBtn = document.querySelector('.change-color');

const spanColor = document.querySelector('.color'); 

colorBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) { 
  const bgcColor = getRandomHexColor();

  body.style.backgroundColor = bgcColor;
  spanColor.textContent = bgcColor;
}
