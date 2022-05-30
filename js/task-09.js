function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = document.querySelector(".change-color")
const bodyColor = document.querySelector("body")
const spancolor = document.querySelector(".color")
randomColor.addEventListener("click", backgroundcolor);

function backgroundcolor() {
  const hexValue = getRandomHexColor()
  bodyColor.style.backgroundColor = hexValue;
  spancolor.textContent = hexValue;
}
