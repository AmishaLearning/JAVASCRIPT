// truthy and falsy

// const userEmail = "a@amisha.ai"

// if (userEmail){
//     console.log("Got user email");
// } else {
//     console.log("No user email");
// }

// Falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN (Not a Number)

// Truthy values
// "0", 'false', " ", [], {}, function(){}, 

// const userEmail_array = [];

// if (userEmail_array.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj  = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// in console
// false == 0 - true
// false == '' - true
// 0 == '' - true

// Nullish coalescing operator(??) : null, undefined

// let val1;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 15
// val4 = null ?? undefined
// val5 = null ?? 10 ?? 15 // assigns the first value found other than null
// val6 = undefined ?? 20 ?? 15 // assigns the first value found other than undefined

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);
// console.log(val5);
// console.log(val6);

// Ternary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Price is more than 80") : console.log("Price is less than 80");

