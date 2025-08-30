
// const addition = function (num1,num2) {
//     return num1 + num2; 
// }

// console.log(addition(69,45));

// arrow function 

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subteact = (a, b) => a - b;
const sumAll = (a, b, c) => a + b + c;
console.log(sum(34, 65));
const isBigFirst = (a, b) => a > b;
console.log(isBigFirst(50, 40));




// multi line arror function


const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result;
}
console.log(doMath(4, 6));
