const number = document.querySelector("#controls input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");



create.addEventListener("click", handlerInput);
destroy.addEventListener("click", destroyBoxes);

function handlerInput() {
  const amount = number.value;
  if (amount > 0) {
    createBoxes(amount);
  }
}


function createBoxes(amount) {
  const murkup = [];
  for (let i = 0, n = 30; i < amount; i++, n +=10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${n}px`;
    div.style.height = `${n}px`;
    murkup.push(div);
  }
  boxes.append(...murkup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  number.value = "";
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


boxes.classList.add('boxes-style');
