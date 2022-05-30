// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameIn = document.getElementById('name-input');
const nameOut = document.getElementById('name-output');



nameIn.addEventListener('input', (event) => {
    nameOut.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value === "") {
        nameOut.textContent =  'Anonymous'
    }
}
);

