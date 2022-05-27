/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
 можете использовать метод forEach
*/
'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

console.log('Со старой ценой : ');
products.forEach(product =>
    console.log(product)
);

console.log('Со скидкой 15% : ');
products.forEach(product => {
    product.price *= 85 / 100;
    console.log(product)
}
);

