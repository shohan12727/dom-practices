const numbers = [45, 67, 34, 8];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(34, 75, 45, 24)
const max = Math.max(...numbers)

console.log(max);


// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);
// console.log(second);



const first = [1, 2, 3, 4, 5];
const second = [...first];
// const third = [...first, 76,85,34]
second.push(6);
console.log(first);
// console.log(third);


const ages = [45,76,3,34]
const prices = [45,34,78,2];
const all = [...ages, 67, ...prices]
console.log(...all);




const person = { name: 'shohan', age: 20};
const employee = { designation: 'dev', ...person};
console.log(employee);





const total = (a,b,c) => a+b+c;
const result = total(34,67,24);
const digits = [56,34,23];
console.log(total(...digits));
