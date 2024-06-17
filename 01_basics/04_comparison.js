// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1); // automatically JS converts strings to numbers

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);

// strict check
// console.log("2" === 2);

// Symbol

// const Id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(Id);
// console.log(anotherId);
// console.log(Id === anotherId);

// const bigNumber = 789456123741258963n
// console.log(typeof bigNumber);

// Arrays, objects and functions

// // Array
// const heros = ["Superman", "Batman", "Wonder Women"]

// // Object
// let myObj = {
//     name: "Amisha",
//     age: 18,
//     isLoggedIn: false
// }

// // Function

// const myFunction = function() {
//     console.log("Hello World!!")
// }

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++++++++++++++++++

// Stack (Used in Primitive Data Types), Heap (Used in Non-Primitive Data Types)

// Stack

// let myYoutubename = "abcdefghdotcom"

// let anothername = myYoutubename

// anothername = "98765432dotcom"

// console.log(myYoutubename);
// console.log(anothername);

// Heap 

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "amisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);
