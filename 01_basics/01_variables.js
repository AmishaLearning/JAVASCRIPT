const accountId = 144553
let accountEmail = "abcd@google.com"
var accountPassword = "12345"
accountCity = "Bangalore" // this method should not be used, but declaring a variable like this also is possible

let accountState;

// accountId = 2 -- not allowed

accountEmail = "ab@ab.com"
accountPassword = "123456"
accountCity = "Mumbai"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);