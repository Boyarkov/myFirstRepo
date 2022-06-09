'use strict';

let title = prompt('Название вашего проекта');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?', '1000 руб.'));
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?', '1000 руб.'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?', '1000 руб.'));
let rollback = 20;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
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

