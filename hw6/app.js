// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let str1 ='i am in the easycode';
let resStr1 = '';

for (let i = 0; i < str1.length; i++) {
    if (i === 0 || str1[i - 1] === ' ') {
        resStr1 += str1[i].toUpperCase();
        continue;
    }
    resStr1 += str1[i];
}

console.log(resStr1);



// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str2 ='i am in the easycode';
let resStr2 = '';

for (let i = str2.length - 1; i >= 0; i--) {
    resStr2 += str2[i];
}
console.log(resStr2);
// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let num = 10;
let res3 = 1;
for (let i = 1; i <= num; i++) {
    res3 *= i;
}
console.log(res3);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let str4 = 'JavaScript is a pretty good language';
let resStr4 = '';

for (let i = 0; i < str4.length; i++) {
    if (i === 0 || str4[i - 1] === ' ') {
        resStr4 += str4[i].toUpperCase();
        continue
    }
    if (str4[i] === ' ') {
        continue
    }
    resStr4 += str4[i];
}
console.log(resStr4);
// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let res;
for (let num of arr) {
    if (num % 2) {
        console.log(num);
    }
}
// 6. Дан объект:
//     let list = {
//         name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}
console.log(list);