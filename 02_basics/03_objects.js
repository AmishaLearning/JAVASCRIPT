// singleton - one of its kind, formed only in constructors not in literals
// Object.create - constructor method 

// Object Literals

const mySymbol = Symbol("mykey1")
// console.log(typeof mySymbol)

const JsUser = {
    name : "Amisha", // by default key is taken as string
    "full name" : "Amisha Srivastava",
    // mySym : "mykey1",
    [mySymbol] : "mykey1", 
    age : 18,
    location : "Banglore",
    email : "amisha@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.fullname) // doesn't work as we have defined explicitly as string
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySymbol])
// console.log(typeof mySymbol);

// JsUser.email = "amisha@chatgpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser) // can't be changed
// JsUser.email = "amisha@microsoft.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greetings); // function is not executed only function reference came
JsUser.greetings()

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`);// whenever we have to reference same object we use 'this'
}

JsUser.greetingsTwo()