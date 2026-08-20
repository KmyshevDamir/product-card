function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

showTemperature("Москва", 25)


const speedOfLight = 299792458

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость')
  } else if (speed < speedOfLight) {
    console.log('Субсветовая скорость')
  } else {
    console.log('Скорость света')
  }
}

checkSpeed(300000000)


const product = 'Увлажняющий мусс'
const productPrice = 2750

function buyProduct(budget) {
  if (budget > productPrice) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    const difference = productPrice - budget
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
}

buyProduct(2150)



function sayHello(name) {
  console.log("Привет, " + name);
}

sayHello("Дамир");


let name = "Дамир";
let age = 18;
let city = "Нальчик";

function info(name, age, city) {
  console.log(name, age, city);
}

info(name, age, city);