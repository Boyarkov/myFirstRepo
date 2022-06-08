'use strict';

let title = prompt('Название вашего проекта');
//console.log(title);

let screens = prompt('Какие типы экранов нужно разработать?');
//console.log(screens);

let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', '1000 руб.'));
//console.log(screenPrice, typeof screenPrice);

let adaptive = confirm('Нужен ли адаптив на сайте?');
//console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', '1000 руб.'));
//console.log(servicePrice1, typeof servicePrice1);

let service2 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', '1000 руб.'));
//console.log(servicePrice2, typeof servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
//console.log(fullPrice, typeof fullPrice);

let rollback = 20;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку в 10%');
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log('Даем скидку в 5%');
        break;
    case fullPrice < 15000 && fullPrice >= 0:
        console.log('Скидка не предусмотрена');
        break;
    case fullPrice < 0:
        console.log('Что то пошло не так');
        break;
}

/*let title = "NewProject";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10000;
let rollback = 20;
let fullPrice = 200000;
let adaptive = true;


console.log(typeof title);

console.log(typeof fullPrice);

console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов ', screenPrice, ' рублей');

console.log('Стоимость разработки сайта ', fullPrice, ' рублей');

console.log(screens.toLowerCase().split(", "));

console.log('Процент отката посреднику за работу ', fullPrice * (rollback / 100), ' рублей');
*/