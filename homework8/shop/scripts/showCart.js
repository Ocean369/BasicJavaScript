let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tfoot = document.createElement('tfoot');

let cartCount = document.querySelector('.cart-count');
let cart = document.querySelector('.header-menu_cart');
let buttonsCard = document.querySelectorAll('.items-hover_button');

let usersProducts = [];

class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.count = 1;
        this.totalAmount = price;
    }

    incriment() {
        this.count++;
    }

    chengeTotal() {
        this.totalAmount = this.price * this.count;
    }
}

/**
 * После загрузки страницы создаем таблицу и прячем кол-во товаров в корзине
 */
window.addEventListener('load', () => {
    createTable();
    // if (cartCount.textContent === '') {
    cartCount.style.display = 'none';
    // }
})

/**
 * Смещает или скрывает таблицу  с продуктами в корзине при смене размера экрана
 */
window.addEventListener('resize', () => {
    let cartUser = document.querySelector('.cartUser');
    cartUser.style.right = (Number(getComputedStyle(document.querySelector('.container')).marginRight.slice(0, -2)) + 20).toString() + "px";

    if (window.innerWidth <= 678) {
        if (document.querySelector('.cartUser').classList.contains('show-block')) {
            document.querySelector('.cartUser').classList.remove('show-block');
        }
    }
})

/**
 * Добавляем обработку события всем кнопкам "add to cart"
 */
buttonsCard.forEach((btnCard) => {
    btnCard.addEventListener('click', addProduct);
})


/**
 * Добавляет новый товар в корзину или увеличивает кол-во уже добавленного товара
 * @event event
 * @listens 
 */
function addProduct(event) {
    let product = searchDataCartProduct(event);
    let productName = product.name;
    let search = false;

    usersProducts.forEach(item => {
        if (item.name === productName) {
            search = true;
        }
    });

    if (!search) {
        usersProducts[usersProducts.length] = new Products(product.name, product.price);
        search = false;
        addCountCard(Number(cartCount.textContent));
        addProductToCart(usersProducts[usersProducts.length - 1]);
    } else {
        incrimentCount(product);
    }
}


/**
 * Determine whether a node's text content is entirely whitespace.
 *
 * @param nod  A node implementing the |CharacterData| interface (i.e.,
 *             a |Text|, |Comment|, or |CDATASection| node
 * @return     True if all of the text content of |nod| is whitespace,
 *             otherwise false.
 */
function is_all_ws(nod) {
    // Use ECMA-262 Edition 3 String and RegExp features
    return !(/[^\t\n\r ]/.test(nod.textContent));
}

/**
 * Увеличивает счетчик у корзины на 1 товар
 * @param {number} количество товаров в корзине
 */
function addCountCard(count) {

    if (cartCount.style.display == 'none') {
        cartCount.style.display = 'flex';
    }
    count = Number(cartCount.textContent);
    cartCount.textContent = ++count;

}

/**
 *  Получает данные(название и цену) из карточки товара, которую выбрал пользователь
 * увеличивает счетчик у корзины на 1 товар
 * @param {event} event кнопка "add to card" у продуктов
 * @returns Объект с названием и ценой товара
 */
function searchDataCartProduct(event) {
    let parentBtnCard = event.currentTarget.parentNode.parentNode.nextSibling;

    if (is_all_ws(parentBtnCard)) {
        parentBtnCard = parentBtnCard.nextSibling;
    }

    let productName = parentBtnCard.querySelector('.items-infocards_text-name').textContent;
    let price = parentBtnCard.querySelector('.items-infocards_text-prise').textContent;
    let productPrice = Number(price.slice(1));

    return {
        name: productName,
        price: productPrice,
    };
}

/**
 * Обработка клика
 */
cart.onclick = () => {
    document.querySelector('.cartUser').classList.toggle('show-block');
}

/**
 * Coздает макет таблицы и записывает первую строку с оглавлением столбцов
 */
function createTable() {
    document.querySelector('.menu').insertAdjacentHTML('afterend', '<div class="cartUser"></div>');
    let cartUser = document.querySelector('.cartUser');
    cartUser.style.right = (Number(getComputedStyle(document.querySelector('.container')).marginRight.slice(0, -2)) + 20).toString() + "px";


    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    // Adding the entire table to the body tag
    document.querySelector('.cartUser').appendChild(table);

    // Creating and adding data to first row of the table
    let rowHead = document.createElement('tr');
    rowHead.style.fontSize = "14px";
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Название товара";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Кол-во";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Цена за штуку";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Итого";

    rowHead.appendChild(heading_1);
    rowHead.appendChild(heading_2);
    rowHead.appendChild(heading_3);
    rowHead.appendChild(heading_4);
    thead.appendChild(rowHead);
    createTFoot();
}

/**
 *  записывает данные  в footer таблицы 
 */
function createTFoot() {
    // Creating and adding data to last row of the table
    let rowFoot = document.createElement('tr');
    let footer = document.createElement('td');
    let finalPrice = document.createElement('td');

    footer.setAttribute('colspan', "3");
    footer.style.textAlign = 'right';
    footer.innerHTML = 'Товаров в корзине на сумму:';
    finalPrice.setAttribute('id', 'cartFinalPrice');
    finalPrice.style.textAlign = "left";
    finalPrice.innerHTML = '$0';

    rowFoot.style.fontSize = "14px";
    rowFoot.style.fontWeight = "bold";
    rowFoot.appendChild(footer);
    rowFoot.appendChild(finalPrice);
    tfoot.appendChild(rowFoot);

}

/**
 * Добавляет выбранный пользователем товар в корзину
 * @param {object} product продукт выбранный пользователем
 * @param {string} product.name название выбранного товара
 * @param {number} product.price цена за один выбранный товар
 * @param {number} product.count кол-во единиц общая цена выбранного товара
 * @param {number} product.totalAmount 
 */
function addProductToCart(product) {

    let rowWithProduct = `<tr id="${product.name}" style="font-size: 12px; color: lightslategray;">
                            <td>${product.name}</td>
                            <td>${product.count} шт</td>
                            <td>$${product.price}</td>
                            <td>$${product.totalAmount}</td>
                            </tr>`;

    tbody.insertAdjacentHTML('beforeend', rowWithProduct);
    countFinishPrice();
}

/**
 * Увеличивыет кол-во выбранного пользователем товара на 1 и пересчитывает итоговые суммы
 * @param {object} item Товар выбранный пользователем
 * @param {string} item.name название товара
 * @param {number} item.price цена за единицу товара
 * @param {number} item.count кол-во единиц товара выбранная ранее пользователем
 * @param {number} item.totalAmount общая цена выбранного товара
 */
function incrimentCount(item) {
    let rowTableWithName = document.getElementById(item.name);

    usersProducts.forEach((product) => {
        if (product.name === item.name) {
            product.incriment();
            product.chengeTotal();
            rowTableWithName.cells[1].innerHTML = product.count.toString() + " шт";
            rowTableWithName.cells[3].innerHTML = "$" + product.totalAmount.toString();
        }
    });
    countFinishPrice();
}

/**
 * Пересчитывает  итоговую сумму по всем товарам в корзине
 */
function countFinishPrice() {
    let finishPrice = 0;

    usersProducts.forEach((item) => {
        finishPrice += item.totalAmount
    });

    document.getElementById('cartFinalPrice').innerHTML = "$" + finishPrice.toString();
}