const numbInput = document.querySelector("#controls input");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");


numbInput.addEventListener("change", onNumbInput);

createBtn.addEventListener("click", onCreateBtnClick);

destroyBtn.addEventListener("click", onDestroyBtnClick);


let boxesAmount = 0;
function onNumbInput(e) {
  if (e.currentTarget.value <= 0 || e.currentTarget.value > 100) { 
    alert("Enter the number in the range between 1 and 100");    
  } else {
    boxesAmount = e.currentTarget.value;
  }
}

function onCreateBtnClick() {
  createBoxes(boxesAmount);
}

function createBoxes(amount) {
  let basicWidth = 30;
  let basicHeight = 30;

  const boxesArr = [];

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.classList.add("new-box");
    div.style.width = `${basicWidth}px`;
    div.style.height = `${basicHeight}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxesArr.push(div);

    basicHeight += 10;
    basicWidth += 10;
  }

  boxes.append(...boxesArr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onDestroyBtnClick(e) {
  const boxesToRemove = document.querySelectorAll(".new-box");

  for (const box of boxesToRemove) {
    box.remove();
  }
}






