const numbers = [1, 2, 3, 4, 5, 6];

// const doubleIt = x => x*2;
// const doubled = numbers.map(doubleIt);
// console.log(doubled);


const doubled = numbers.map(num => num * 2);
console.log(doubled);


const friends = ['Shohan', 'Rakesh', 'Raju', 'Fardin'];


const firstLetter = friends.map(friend => friend[0]);

const makeAllUpper = friends.map(friend => friend.toUpperCase());

console.log(makeAllUpper);

// console.log(firstLetter);
