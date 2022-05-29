function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesEl = document.getElementById("boxes");
const amountIn = document.querySelector("input");
const create = document.querySelector('button [data-create]');
const destroy = document.querySelector("button [data-destroy]")

function createBoxes(amount) {
  const numberOfDiv = [];
  let startSize = 0;
 
  for (let i = amountIn.min; i <= amount; i++) {
    const divEl = document.createElements("div");
    const styleSize = startSize + styleSize;
  divEl.style.backgroundColor = 'getRandomHexColor';
  divEl.style.width = `${styleSize}px`;
  divEl.style.height = `${styleSize}px`;
  numberOfDiv.push(divEl);
}
  boxesEl.append(...numberOfDiv);
}; 



// create.addEventListener("click", createBoxes());






