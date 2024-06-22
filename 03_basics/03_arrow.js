// arrow function

const user = {
    username : "Amisha",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this) // context is username = "Amisha"
    }
}

// user.welcomeMessage()
// user.username = "Sam" // context is username = "Sam"
// user.welcomeMessage()

// console.log(this);// context is {} empty object but in console it will be window

// function chai(){ // context doesn't work with functions
//     let username = "Chaitanya"
//     console.log(this.username);

// }
// chai()

// const chai = function(){
//     let username = "Chaitanya"
//     console.log(this.username);
// }

// const chai = () => { // arrow function
//     let username = "Chaitanya"
//     console.log(this.username);
// }

// chai()

// Arrow function

// () => {}

// explicit return - when return keyword is needed to be added
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return - when return keyword is not needed
// const addTwo = (num1, num2) => num1 + num2

// if wraping in {} return is needed but if in () return is not needed
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username : "Amisha"} - for returning an object, wrapping in () is needed

// const addTwo = (num1, num2) => ({username : "Amisha"})

// console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5, 6, 7]

// myArray.forEach(function () {})

myArray.forEach(() => {})
// myArray.forEach(() => ())