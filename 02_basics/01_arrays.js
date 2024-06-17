// arrays

const myArr = [1, 3, 5, 7, 9];
// const myHeros = ["Batman", "Superman", "Spiderman", "Ironman", "Thor"];
// const newArr = new Array(2, 4, 6, 8, 10);
// console.log(myArr[0]);

// Array Methods

// myArr.push(6);
// myArr.push(8); // adds element to the end of the array
// myArr.pop(); // removes the last element
// console.log(myArr);

// myArr.unshift(99); // adds element to the beginning of the array
// console.log(myArr);

// myArr.shift(); // removes the first element
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(6)); // returns the index of the element - if element not present returns -1

const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);
// console.log(typeof myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // returns a new array - doesn't manupulate the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // removes elements from the array - manupulates the original array
console.log("C ", myArr);
console.log(myn2);