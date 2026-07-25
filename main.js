const productCards = document.querySelectorAll('.products__item')
const changeColorAllCardsButton = document.querySelector('#change-color-all-card')
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF'

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// одна карточка

const firstProductCard = document.querySelector('.products__item')
const changeColorFirstCardButton = document.querySelector('#change-color-first-card')

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

// google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return;
  }
}

// Вывод console.log

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => {
  outputConsoleLog('ДЗ №4');
});

function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}

// наведение на тайтл

const title = document.querySelector('.title');

title.addEventListener('mouseover', () => {
  console.log(title.textContent);
});

// Смена цвета кнопки

const changeButtonColor = document.querySelector('#change-button-color');

changeButtonColor.addEventListener('click', () => {
  changeButtonColor.classList.toggle('green-button');
});