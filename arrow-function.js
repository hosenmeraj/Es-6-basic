// express function
function add(num1, num2) {
    return num1 + num2;
}
const result = add(12, 15);
// console.log(result);

//variable function
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const sum = add2(10, 15);
// console.log(sum);

//variable anynimuos function
const add3 = function (num1, num2) {
    return num1 + num2;
}
const number = add3(20, 30);
// console.log(number);

//arrow function
const add4 = (num1, num2) => num1 + num2;
const add5 = num => num * 5
const number3 = add5(5);
const number2 = add3(30, 30);
// console.log(number2, number3);

const getName = () => 'meraj';
const name = getName();
// console.log(name);

//multiline arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiple = sum * diff;
    const output = multiple;
    return output;
}
const total = doMath(30, 20);
console.log(total);



