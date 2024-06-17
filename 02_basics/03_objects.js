// singleton - one of its kind, formed only in constructors not in literals
// Object.create - constructor method 

// Object Literals

const JsUser = {
    name : "Amisha", // by default key is taken as string
    age : 18,
    location : "Banglore",
    email : "amisha@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email)