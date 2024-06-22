// Scopes

// let a = 10
// const b = 20
// var c = 30

// var c = 300 // global scope 

// if (true){ // block scope -- whatever value inside this block sould not go out
//     let a = 10
//     const b = 20
//     var c = 30 // not used due to scope problem
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// let a = 200

// if (true){
//     let a = 10
//     const b = 20
//     console.log(`Inner Loop : ${a} `);
// }

// console.log(`Outer Loop : ${a} `);

// Nested Scopes

// function one (){
//     const username = "Amisha"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }

// one()

// if (true){
//     const username = "Amisha"
//     if (username === "Amisha"){
//         const website = " youtube"
//         console.log(username + website); 
//     }
//     // console.log(website);
// }
// // console.log(username);

// ++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num) { // functions
    return num + 1
}


addTwo(5)
const addTwo = function(num) { // expressions -- declared and holded in a variable
    return num + 2
}

