function sum(a, b, ...rest) { // this is parameter
    let total = a + b;
    for (let num of rest) {
        total += num
    }
    console.log(total);

}
sum(10, 20, 30, 40) //this is aguments


function subteact(a, b = 0) {
    return a - b;
}
console.log(subteact(10));
