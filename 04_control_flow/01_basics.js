// if
// const isUserLoggedIn = true;

// <, >, <=, >=, ==, ===(checks equality as well as type), !=, !==

// if (3 != 2 ){

// // }

// if (2 == "2" ){ // not strict checking
//     console.log("Executed")
// }

// if (2 === "2" ){ // strict checking
//     console.log("Executed Strictly")
// }

const temperature = 41;

// if(temperature < 50){
//     console.log("tempersture is less than 50");
// }
// console.log("Temperature is greater than 50"); // always executed

// if (temperature < 50) {
//     console.log("tempersture is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed Always");

const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`)
// }
// console.log(`User Poer : ${power}`) // ReferenceError: power is not defined

// if (score > 100){
//     let power = "fly"
//     console.log(`User Power : ${power}`)
// }
// console.log(`User Poer : ${power}`) // ReferenceError: power is not defined

// if (score > 100){
//     var power = "fly" // not recommended
//     console.log(`User Power : ${power}`)
// }
// console.log(`User Power : ${power}`) // ReferenceError: power is not defined

// Shorthand notation

// balance = 1000;

// if (balance > 500) console.log("Balance is greater than 500"), console.log("Executed");// implicit scope - unreadable code

// if (balance < 500){
//     console.log("Balance is less than 500");
// }else if (balance < 750){
//     console.log("Balance is less than 750");
// }else if (balance < 900){
//     console.log("Balance is less than 900");
// }else{
//     console.log("Balance is less than 1200");
// }

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;

if (isUserLoggedIn && debitCard && 2 == 3){ // both conditions should be true for it to execute
    console.log("Allow to buy courses");
}

if (isUserLoggedIn || loggedInFromGoogle){
    console.log("User Logged In");
}