//date is an object in JS

let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

//note imp: date returns in the form of mili secs and to get in the form of the sec then  line 17
let currDate = Date.now();
console.log(Math.floor(currDate.toString()/1000));  