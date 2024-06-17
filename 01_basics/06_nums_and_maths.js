// const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof (balance.toString())); // to convert to string
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // to convert to string with 2 decimal places
// console.log(typeof (balance.toFixed(2))); // to convert to string with 2 decimal places

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));// to convert to string with 2 decimal places - priority is given to numbers before decimal, if not available then after decimal

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // to convert to string with commas (,)

// --------------------------------------------Maths--------------------------------------------

console.log(Math);
// console.log(Math.abs(-100)); // to get absolute value - if -ve number is there it will change to positive
// console.log(Math.round(1.5)); // to round off to nearest integer
// console.log(Math.ceil(1.1)); // to round off to next integer - if number is greater than 1, it will take the next integer
// console.log(Math.floor(1.9)); // to round off to previous integer - even if the number is 1.9, it will take the previous integer
// console.log(Math.min(1, 2, 3, 4, 5)); // to get minimum value
// console.log(Math.max(1, 2, 3, 4, 5)); // to get maximum value

console.log(Math.random()); // to get random number between 0 and 1
console.log(Math.random() * 10); // to get random number between 0 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get random number between 10 and 20