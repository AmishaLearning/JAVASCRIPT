// MAP

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10 ) // returns value automatically

// Chaining

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1) // contains the value generated from above map
                .filter( (num) => num >= 40)

console.log(newNums);
