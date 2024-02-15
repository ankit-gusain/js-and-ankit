//note you can not use the this function with the arrow function

// function sample() {
//     let username = "sama";
//     console.log(this.username);         //will give undefined 
// }
// sample();

//----------------------------------------------------------------------------------------------

// let sample = () => {
//     let username = "sama";
//     console.log(this.username);      //will give undefined 
//     console.log(this);         //in node this will give {} but on console will give window ......
// }
// sample();

//------------------------------------------------------------------------------------------------

// deep dive into arrow function...

//jab curly braces { } lenge toh hame return statement use krni hi pdegi
// let add2 = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(add2(2, 4));

//------------------------------------------------------------------------------------------------

//jab brackets ( ) tb return ki jaroort nahi hai 

let sum2 = (n1, n2) => (n1 + n2);
let passObjWithBrackets = (n1, n2) => ({ username: "ankit" });

console.log(passObjWithBrackets());

