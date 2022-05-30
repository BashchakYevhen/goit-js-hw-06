// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.getElementById('font-size-control');
const textSize =  document.getElementById('text')

fontSizeControl.addEventListener('input', () => {
    textSize.style.fontSize = fontSizeControl.value + "px";

    console.log( textSize.style.fontSize)
    
})