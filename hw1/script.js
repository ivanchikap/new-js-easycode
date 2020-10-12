// 1. Получить число PI и округлить его 2-х знаков после точки
const num = Number(Math.PI.toFixed(2));
console.log(num);
// 2. ПОлучить максимальное и минемальное число (15 ,11, 16, 12, 51, 12, 13, 51)


console.log(Math.max(15 ,11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15 ,11, 16, 12, 51, 12, 13, 51));

// 3. Math.random(): a. Получить случайное число и округлить его до 2-х знаков почле комы
//                   b. Получить случайное чилсо от 0 до Х. Х - любое целое число

console.log(+Math.random().toFixed(2));

console.log(Math.floor(Math.random()*(3+1)));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду

let sum = 0.6 + 0.7;
console.log(+sum.toFixed(1));

// 5. Получит число из строки '100$'
console.log(parseInt('100$'));