// Functions

function sayMyName (){ // function definition
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}

// sayMyName // reference
// sayMyName() // function call

// function addTwoNums_1 (number1, number2) { // number1, number2 - parameters ---- when we define function definition inputs are called parameters
//     console.log(number1 + number2);
// }

// addTwoNums_1(5, 8)// 5, 8 - arguments ---- when we define function call inputs are called arguments

function addTwoNums_2 (number1, number2) { // number1, number2 - parameters ---- when we define function definition inputs are called parameters

    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

// const result = addTwoNums_2(5, 8);
// console.log("Result : ", result)

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please provide username");
//     //     return
//     // }
//     if(!username){
//         console.log("Please provide username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("Amisha"))
// console.log(loginUserMessage())

// function loginUserMessage(username = "sam"){ // default value provided
//     // if(username === undefined){
//     //     console.log("Please provide username");
//     //     return
//     // }
//     if(!username){
//         console.log("Please provide username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){ // rest operator
//     return num1    
// }

// // console.log(calculateCartPrice(10, 200, 400));

// function calculateCartPrice(val1, val2, ...num1){ // rest operator
//     return num1    
// }

// // console.log(calculateCartPrice(10, 200, 400, 2000));

// // Objects in Functions

// const user = {
//     username : "Amisha",
//     price : 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

// }

// // handleObject(user)
// handleObject({
//     username : "Hitesh",
//     price : 299
// })

const myArray = [100, 230, 120, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 400, 100, 500]));