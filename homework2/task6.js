/*
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
*/

let price = prompt('Введите сумму в рублях, которую вы хотите положить на счет в банке');

/**
 * Функция возвращает строку с двумя последними символами или целиком, если строка из одного символа
 * @param {string} priceAll  -  сумма, которую ввел пользователь
 * @returns {string} Строка с двумя или одним последними символами
 */

function getLastNumber(priceAll) {
    let lengthStr = priceAll.length;

    if (lengthStr > 1) {
        return priceAll.slice(lengthStr - 2);
    } else return priceAll;
}


/**
 * Функция ,которая проверяет последние цифры суммы и выводит слово «рубль» в правильном падеже
 * @param {number} lastNumber - последние цифры от суммы
 * @returns {string} - строка со словом  «рубль» в правильном падеже
 */
function setDeclension(lastNumber) {

    if (lastNumber >= 11 && lastNumber <= 19) return ' рублей успешно зачислена.'

    let remainderOfDivision = lastNumber % 10;

    if (remainderOfDivision == 0 || remainderOfDivision >= 5)
        return ' рублей успешно зачислена.'
    if (remainderOfDivision == 1)
        return ' рубль успешно зачислена.'
    if (remainderOfDivision >= 2 && remainderOfDivision <= 4)
        return ' рубля успешно зачислена.'
}

/**
 * Функция, которая получает строку от пользователя и выводит для него информацию
 * @param {string} priceUser - строка, которую ввел пользователь
 * @returns {string} - строка для вывода информации пользователю
 */
function setStringForUser(priceUser) {
    if (isNaN(priceUser)) return 'Вы не ввели сумму! Попробуйте еще раз.'
    if (priceUser == null || priceUser == undefined) return 'Вы не правильно ввели сумму! Попробуйте еще раз.'
    if (Number(priceUser) < 0) return 'Сумма не может быть отрицательной! Попробуйте еще раз.'
    let stringForUser = 'Ваша сумма в ';
    stringForUser += priceUser + setDeclension(getLastNumber(priceUser));
    return stringForUser;
}

alert(setStringForUser(price));
