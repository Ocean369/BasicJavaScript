'use strict';

let a = +prompt('Введите первое целое число');
let b = +prompt('Введите второе целое число');

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}
