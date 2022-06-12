function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesEl = document.getElementById("boxes");
const amountIn = document.querySelector("input");
const create = document.querySelector('button [data-create]');
const destroy = document.querySelector("button [data-destroy]")

function returnNUmberOfInput (event)
{const inpValue = Number(event.currentTarget.value);

  if (inpValue < amountIn.min ||
    inpValue > amountIn.max ||
    !Number.isInteger(inpValue))
  {
    alert(` Please enter integer from${amountIn.min} to ${amountIn.max}`);
    event.currentTarget.value = '';
  } else {
    console.log(amountIn.value)
    return (amountIn.value = inpValue);
  }
};

function createBoxes(amount) {
  const numberOfDiv = [];
  let startSize = 0;
  
  for (let i = amountIn.min; i <= amount; i++) {
    const divEl = document.createElement("div");
    const styleSize = startSize + 30;
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.width = `${styleSize}px`;
  divEl.style.height = `${styleSize}px`;
    numberOfDiv.push(divEl);
    startSize = styleSize;
}
  boxesEl.append(...numberOfDiv);
  console.log(numberOfDiv)
}; 
amountIn.addEventListener('change',returnNUmberOfInput);
create.addEventListener("click", createBoxes(amountIn.value)
);
 
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// const boxesEl = document.querySelector('#boxes');
// const inputEl = document.querySelector('input');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');
// function clearInput() {
//   inputEl.value = '';
// }

// function createBoxes(amount) {
//   const devEl = [];
//   let sizeDiv = 0;
//   for (let i = inputEl.min; i <= amount; i++) {
//     const element = document.createElement('div');
//     let incrSizeDiv = sizeDiv + 30;
//     element.style.width = `${incrSizeDiv}px`;
//     element.style.height = `${incrSizeDiv}px`;
//     element.style.backgroundColor = getRandomHexColor();
//     element.style.border = 'solid';
//     element.style.borderWidth = '1px';

//     devEl.push(element);
//     sizeDiv = incrSizeDiv;
//   }
//   boxesEl.append(...devEl);
// }

// function destroyBoxes() {
//   boxesEl.innerHTML = '';
//   clearInput();
// }

// function onInputElChange(event) {
//   // boxesEl.innerHTML = "";
//   const inputNum = Number(event.currentTarget.value);
//   if (
//     inputNum < inputEl.min ||
//     inputNum > inputEl.max ||
//     !Number.isInteger(inputNum)
//   ) {
//     alert(`Please enter an integer from ${inputEl.min} to ${inputEl.max}`);
//     event.currentTarget.value = '';
//   } else {
//     return (inputEl.value = inputNum);
//   }
// }

// inputEl.addEventListener('change', onInputElChange);

// btnCreate.addEventListener('click', function (event) {
//   if (event.currentTarget === event.target) {
//     createBoxes(inputEl.value);
//   }
// });

// btnDestroy.addEventListener('click', destroyBoxes);


