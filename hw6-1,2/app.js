// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// multiply() //0

function multiply() {
    if (!arguments.length) {
        return 0
    }
    let res = 1;
    for (let num of arguments) {
        res *= num;
    }
    return res;
}
console.log(multiply(1,2,3));
console.log(multiply());

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(string = '') {
    let resStr = '';
    let str = String(string);
    if (!str) return 'Pustaya';
    for (let i = str.length - 1; i >= 0; i--) {
        resStr += str[i];
    }
    return resStr
}
console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

//     getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// подсказка: для получения кода используйте специальный метод
function getCodeStringFromText(str) {
    if (!str) return 'error'
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) + ' ';
    }

    return res
}
console.log(getCodeStringFromText('hello'));

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) return 'Ввели не число'
    if (num > 10 || num < 0) return 'Num should be [0-10]'
    const randomNum = Math.floor(Math.random()*11);
    return num === randomNum ? 'Вы выиграли' : 'Вы проиграли';
}
console.log(guessNumber(1));
console.log(guessNumber(2));
console.log(guessNumber(" "));


// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
// Данное задание выполните после того как познакомитесь с методами массивов.
function getArray(num) {
    let resArr = [];
    for (let i = 1; i <= num; i++) {
        resArr.push(i);
    }
    return resArr
}
console.log(getArray(10));
// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
//     doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
    if (!Array.isArray(arr) || !arr.length) return 'ввели не массив или пустой'
    return arr.concat(arr);

}
console.log(doubleArray([]));
console.log(doubleArray('str'));
console.log( doubleArray([1,2,3]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
//     changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection() {
    let resArr = [];
    for (let arr of arguments) {
        if (!Array.isArray(arr) || !arr.length) return 'Один из масивов пустой или не массив'
        arr.shift();
        resArr.push(arr);
    }

    return resArr;
}
console.log(changeCollection([1,2,3], ['a', 'b', 'c']));
console.log(changeCollection([1,2,3]));
console.log(changeCollection([]));
console.log(changeCollection(12, 3));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
//     Данное задание выполните после того как познакомитесь с методами массивов
console.log('-----------task8-------------')
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]



function funcGetUsers(users, field, value) {
    if (arguments.length < 3) return 'Аргументов должно не меньше 3';
    if (!Array.isArray(users) || !users.length) return 'Передан не массив или пустой массив';
    if (typeof field !== 'string' || typeof value !== "string") return 'value and field must be a string'
    let resUsers = [];
    for (let user of users) {
        if (user[field] === value) resUsers.push(user);
    }
    return resUsers;
}
console.log(funcGetUsers([{name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'}, {name: 'Valia', age: '20', gender: 'female'}], 'gender', 'male'));
console.log(funcGetUsers([{name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'}, {name: 'Valia', age: '20', gender: 'female'}], 'age', '20'));

console.log(funcGetUsers());
console.log(funcGetUsers([], 'as', '123'));
console.log(funcGetUsers('1asd', 'as', '123'));
console.log(funcGetUsers('1asd', 'as'));