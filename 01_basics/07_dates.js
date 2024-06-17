// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log("toString : ", myDate.toString());
// console.log("toDateString : ", myDate.toDateString());
// console.log("toTimeString : ", myDate.toTimeString());
// console.log("toISOString : ", myDate.toISOString());
// console.log("toLocaleDateString : ", myDate.toLocaleDateString());
// console.log("toJSON : ", myDate.toJSON());
// console.log("toLocaleString : ", myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2024-01-01")
// let myCreatedDate1 = new Date(2023, 3, 1)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long'
})