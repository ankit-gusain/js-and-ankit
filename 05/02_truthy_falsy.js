// let sname = "ankit";
// if (sname) {
//     console.log(`name is ${sname}`);
// }
// else {
//     console.log("no name");
// }


//------------------------------------------------------------------------------


//falsy value--->

//false, 0, -0, BigInt, on, "", null, undefinded, NaN

//truthy value--> 

//"0" , "false" , " " , [] , {} , function(){}

//******note*******
//any thing inside the string is truthy
//empty function, object and array is truthy

//      note:
//false == 0 //true
//false == "" //true
//0 == ""   //true

//------------------------------------------------------------------------------

//null coalsecing operator ?? null or undefinded

let val1;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 10 ?? 12;
console.log(val1);

//-----------------------------------------------------------------------------

//ternary operator          condition ? true : false

let num1 = 100;

(num1 > 100) ? console.log("greater than 100") : console.log("less than 100");
//      condn    ?                true             :         false