// for of - array specific loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);    
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     if (greet === " ") {
//         continue
//     }
//     console.log(`Each char is ${greet}`);    
// }

// Maps - collection of key value pairs - known for storing unique values and also in the same order
// const map = new Map()
// map.set('IN', 'India')
// map.set('US', 'United States')
// map.set('UK', 'United Kingdom')
// map.set('IN', 'India')

// console.log(map);

// for (const key of map) {
//     console.log(key);    
// }

// for (const [key, value] of map) {
//     console.log(key, ":-", value)    
// }

// const myObj = {
//     'game1' : 'cricket',
//     'game2' : 'football',
//     'game3' : 'hockey'
// }

// for (const key of myObj) { // objects are not iterable from for of
//     console.log(key);    
// }