const str = 'My name is Vasia, string here';
// 1. Получить первую и последнюю буквы строки
console.log(str[0]);
console.log(str[str.length - 1]);

// 2. Сделать первую и последнюю буквы в верхнем регистре
const result = str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();

console.log(result)


// 3. Найти положения слова string в строке

console.log(str.indexOf('string'));

// 4. Найти положение второго пробела

console.log(str.indexOf(' ', str.indexOf(' ') + 1));

// 5. Получить строку с 5-го символа длинной 4 буквы

console.log(str.substr(4, 4));

// 6. Получить строку с 5 по 9 символы

console.log(str.slice(4, 9));

// 7. Получить строку без последних 6 символов

console.log(str.slice(0, -6));

// 8. Из двух переменных полусить строку в которой получится 2016

const a = 20;
const b = 16;

console.log(`${a}${b}`);
