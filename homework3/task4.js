/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ ,
   как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// products.forEach(product => console.log(product.photos.length));

function getWithPhoto(product) {
    if (product.photos === undefined) return false;
    if (product.photos.length > 0) return true;
    else return false;
}

function sotrByPrice(product1, product2) {
    let price1 = product1.price;
    let price2 = product2.price;
    return price1 - price2;
}

console.log('Товары, у которых есть фотографии:');
let productsWithPhoto = products.filter(getWithPhoto);
console.log(productsWithPhoto);

console.log('Отсортированные товары по цене (от низкой цены к высокой): ');
products.sort(sotrByPrice);
console.log(products);

