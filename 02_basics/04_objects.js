// Objects Constructors

// const tinderUser = new Object() // singleton Object
const tinderUser = {} // non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
        firstname : "Amisha",
        lastname : "Srivastava"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "e", 6 : "f"}

// console.log({obj1, obj2});
const obj4 = Object.assign({}, obj1, obj2, obj3)// {} - represents empty object which is target, rest values after that are source

// console.log(obj4);
// console.log({...obj1, ...obj2, ...obj3});

// From database

const users = [
    {
        id : 1,
        name : "Amisha",
        email : "amisha@google.com"
    },
    {
        id : 2,
        name : "Sam",
        email : "sam@google.com"
    },
    {
        id : 3,
        name : "John",
        email : "john@google.com"
    }
]

// console.log(users[0].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("email"));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring

const course = {
    coursename : "JS",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course
// console.log(instructor);

// json format

// {
//     "name" : "Amisha",
//     "email" : "amisha@google.com",
//     "age" : 18
// }