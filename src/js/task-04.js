// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const value = document.querySelector('#value');
let counterValue = 0;
document.getElementById('value').innerHTML = counterValue;
const butDecrementEl = document.querySelector('button[data-action="decrement"]');
const butIncrementEl = document.querySelector('button[data-action="increment"]');

const increm = () => 
   { counterValue += 1;
document.getElementById('value').innerHTML = counterValue;}
    
const dencrem = () => 
   { counterValue -= 1;
document.getElementById('value').innerHTML = counterValue;}
butDecrementEl.addEventListener('click', dencrem);
butIncrementEl.addEventListener('click', increm)
