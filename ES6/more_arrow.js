const getTax = (ammount, taxRate) => ammount * taxRate / 100;

console.log(getTax(5000, 5));


//single parameter

const getSquare = x => x * x;
console.log(getSquare(8));

const getHalf = num => num / 2;

console.log(getHalf(100));


const getFirst = nums => nums[0];

console.log(getFirst([2, 3, 4, 67, 34, 6]));



const loIt = () => console.log('Shohan');

loIt()


// annonymous fuction

// document.getElementById('').addEventListener('click', () => {

// })

