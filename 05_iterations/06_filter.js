// const coding = ['js', 'java', 'python', 'go', 'cpp']

// coding.forEach( (item) => {
//     console.log(item)
// })

// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// const values = coding.forEach( (item) => { // forEach returns undefined 
//     // console.log(item)
//     return item
// })
// console.log(values)

// FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   

// const newNums = myNums.filter( (num) => num > 4) // returns value

// const newNums = myNums.filter( (num) => { // without return it will not print as we have declared scope
//     return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books =[
    {title : "Book One", genre : "Fiction", publish : 2010, edition : 2004},     
    {title : "Book Two", genre : "Non-fiction", publish : 1998, edition : 2015},
    {title : "Book Three", genre : "Romance", publish : 2000, edition : 2010},
    {title : "Book Four", genre : "Science", publish : 2005, edition : 2017},
    {title : "Book Five", genre : "History", publish : 2003, edition : 2012},
    {title : "Book Six", genre : "Fiction", publish : 2008, edition : 2010},
    {title : "Book Seven", genre : "History", publish : 2009, edition : 2015},
    {title : "Book Eight", genre : "Science", publish : 2003, edition : 2010},
    {title : "Book Nine", genre : "Non-fiction", publish : 2005, edition : 2017},
];

let userBooks = books.filter( (bk) => bk.genre === "History")

userBooks = books.filter ( (bk) => {return  bk.publish >= 2000})

userBooks = books.filter ( (bk) => {
    return  bk.publish >= 2005 && bk.genre === "Science"
})

console.log(userBooks)