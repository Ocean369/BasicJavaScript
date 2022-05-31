'use strict';

let numberUser = +prompt('Введите целое число  в диапазоне [0, 999]');

/**
 * Функция которая проверяет полученное число и возвращает объект с соством числа
 * @param {*} num - число введенное пользователем
 * @returns {object} - состав числа
 */
function getNumberComposition(num) {
    if ((isNaN(num)) || (!Number.isInteger(num)) || (num === undefined)) {
        console.log('Вы не ввели целое число, попробуйте еще раз');
        return {};
    }
    if ((num < 0) || (num > 999)) {
        console.log('Вы не ввели число в нужном диапазоне, попробуйте еще раз');
        return {};
    } else {
        return {
            units: num % 10,
            tens: Math.floor(num % 100 / 10),
            hundereds: Math.floor(num / 100)
        };
    }
}

console.log(getNumberComposition(numberUser));

