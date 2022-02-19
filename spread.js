const number = [30, 44, 22, 24, 80, 55, 12, 44, 200];
// console.log(number);
// console.log(...number);
const max = Math.max(30, 44, 22, 24, 80, 55, 12, 44);
const maxValue = Math.max(...number);
// console.log(max);
// console.log(maxValue);

const number2 = [11, ...number, 90];
number.push(422);
console.log(number);
console.log(number2);