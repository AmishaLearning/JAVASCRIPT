// for
// ctrl + d to select multiple lines

// for (let index = 0; index <= 10; index++) { // (variable declaration, condition, increment/decrement) -- increment/decrement is executed once after every iteration
//     const element = index;
//     if (element == 5){
//         console.log("5 is my favorite number");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop ${j} and outer loop ${i}`); 
//         // console.log(i + " * " + j + " = " + i*j); 
//         console.log(`${i} * ${j} = ${i*j}`);             
//     }    
// }

// let myArray = ["flash", "batman", "superman"] 
// console.log(myArray.length)

// for (let index = 0; index <= myArray.length; index++) { // prints undefined as in array indexing starts with 0
//     const element = myArray[index];
//     console.log(element);
// }

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break & continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of index is : ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of index is : ${index}`);
}