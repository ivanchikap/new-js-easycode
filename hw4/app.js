// 1. Чему равно, почему
let a;

a = 0 || 'string'; //string, запинается на правде
a = 1 && 'string'; //string, последння правда
a = null || 25; //25, запинается на правде
a = null || 0 || 35; //35, первая правда
a = null && 0 && 35; // null, первая ложь

// 2. Что отобразится в консоли

/*
12 + 14 + '12' // 3412
3 + 2 - '1' // 4
true + 2 // 3
+'10' + 1 // 11
undefined + 2 // NaN
null + 5 // 5
true + undefined // NaN
*/

// 3. Если переменная равна hidden присвоить visible, иначе hidden
let variable = 'hidden';

if (variable === "hidden") {
    variable = 'visible';
} else {
    variable = 'hidden';
}
console.log(variable);

// 4. Если переменная = 0, присвоить 1. Если меньше 0, 'less then zero'. Если больше 0, умножить на 10

let num = 4;

if (num === 0) {
    num = 1;
} else if (num < 0) {
    num = 'less then zero';
} else {
    num *= 10;
}
console.log(num);

// 5.Если возрасл машины больше 5 лет вывести сообщение 'Need Repair', и свойство needRepair изменить в true. Иначе изменить на false

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}


if (car.age > 5) {
    car.needRepair = true;
    console.log('Need Repair');
} else {
    car.needRepair = false;
}
console.log(car);

// 6. Если у item есть поле discount и там есть значение которое не NaN, а также есть поле price значение которого также не NaN, то в обьекте создать поле priceWithDiscount, То записать туда цену с учотом скидки и вывксти ее в консоль. Иначе если поля discount нет то вывести просто price в консоль

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: "25%"
};

if (item.discount && !Number.isNaN(item.discount) && !Number.isNaN(item.price)) {
    item.priceWithDiscount = parseInt(item.price) * (1 - parseInt(item.discount) * 0.01);
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

console.log(item);


// 7. Если цена больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что этого товара не найдено
let minPrice = 10;
let maxPrice = 20;

let product = {
    name: 'Яблоко',
    price: 10
}

if (product.price >= minPrice && product.price <= maxPrice) {
    console.log(product.name)
} else  {
    console.log('Товара з такой ценой не найдено');
}