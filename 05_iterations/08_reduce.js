// REDUCE

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const initialValue = 0; 
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, // accumulator - initial vale for first time, for later stages whatever is the sum of accumulator and current value that is stored in accumulator
//   initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`accumulator : ${acc}, current value : ${currval}`)
//     return acc + currval
// }, 0)// initial value is 0

// let myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`accumulator : ${acc}, current value : ${currval}`)
//     return acc + currval
//     }, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName : 'js course',
        price : 999
    },
    {
        itemName : 'java course',
        price : 1999
    },
    {
        itemName : 'python course',
        price : 2999
    },
    {
        itemName : 'cpp course',
        price : 3999
    }
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(cartTotal)