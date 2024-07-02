// const coding = ['js', 'java', 'python', 'go', 'cpp']

// // coding.forEach( function name() {})

// coding.forEach(function (item) {
//     console.log(item)
// })//value inside () is not required because it is a callback function -- as this function is running inside array any value can be given inside () like item here refers to all the values in the array

// // coding.forEach( name = () => {})

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)// only reference is needed

// coding.forEach( (item, index, arr) => {
//     console.log(`${item} -- ${index} -- ${arr}`)
//     })

const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
    {
        languageName : 'go',
        languageFileName : 'go'
    }
]

myCoding.forEach( (item, index, arr) => {
    console.log(`${item.languageName}`)
})