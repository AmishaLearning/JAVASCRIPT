// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB CONNECTED");
// }

// chai()
// To remove pollution of global scope we use IIFE

// (function chai(){ // first () is function definition , second () is execution call
//     // named IIFE
//     console.log("DB CONNECTED");
// })();
// // if ; is not used it will not execute the below function

// (function aurcode () {
//     console.log("DB CONNECTED TWO");
// }) ();

// // unnamed IIFE
// ( () => {
//     console.log("DB CONNECTED THREE");
// })();

// ( (name) => {
//     console.log(`Welcome ${name}`)
// })('Amisha')
// // similar to chai("Amisha")

// In browser console

// function one(){
//     console.log("ONE")
// }

// function two(){
//     console.log("TWO")
// }

// function three(){
//     console.log("THREE")
// }

// one()
// two()
// three()


function one(){
    console.log("ONE")
    two()
}

function two(){
    console.log("TWO")
    three()
}

function three(){
    console.log("THREE")
}

one()
two()
three()