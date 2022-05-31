/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
'use strict';

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let userChoiceOperation = prompt('Введите значение операции +, -, /, * , которую вы бы хотели выполнить');

/**
 * Функция высчитывает сумму двух чисел
 * @param {number} arg1 - первое число заданное пользователем
 * @param {number} arg2  - второе число заданное пользователем
 * @returns {number} сумма двух чисел
 */
function sum(arg1, arg2) {
    return arg1 + arg2
}

/**
 * Функция высчитывает разность двух чисел
 * @param {*} arg1 - первое число заданное пользователем
 * @param {*} arg2 - второе число заданное пользователем
 * @returns  {number}  разность  чисел arg1 и  arg2
 */
function subtract(arg1, arg2) {
    return arg1 - arg2
}

/**
 * Функция высчитывает произведение двух чисел
 * @param {number} arg1 - первое число заданное пользователем
 * @param {number} arg2 - второе число заданное пользователем
 * @returns  {number}  произведение  чисел arg1 и  arg2
 */
function multiply(arg1, arg2) {
    return arg1 * arg2
}

/**
 * Функция высчитывает целое число от частного двух чисел
 * @param {number} arg1 - первое число заданное пользователем
 * @param {number} arg2 - второе число заданное пользователем
 * @returns  {number}  целое число от частного двух чисел arg1 и  arg2
 */
function divide(arg1, arg2) {
    return Math.round(arg1 / arg2)
}

/**
 * Функция высчитывает  одну из арифметических
операций
 * @param {number} arg1 - значения аргументов заданное пользователем
 * @param {number} arg2 - значения аргументов заданное пользователем
 * @param {string} operation - строка с названием операции
 * @returns выполняет одну из арифметических
операций с двумя заданными числами
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return subtract(arg1, arg2);
        case "*":
            return multiply(arg1, arg2);
        case "/":
            return divide(arg1, arg2);
        default:
            alert('Такой операции нет!');
    }
}

alert(mathOperation(num1, num2, userChoiceOperation));