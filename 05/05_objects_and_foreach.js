//loops and objects 

// let obj = {
//     oname, "shyam",
//     oheight, "210cm",
//     ocolor, "red"
// };

// for (const key in obj) {
//     console.log(key);
// }
//-------------------------------------------------
// for (let key in obj){
//     console.log(`${key} is ${obj[key]}`);
// }


//-------------------------------------------------

//call back fns--- doesnot have name
//for each.......call back funtions

let lang = ["start", "mid", "end"];

lang.forEach(function (l) {
    console.log(l);
});

lang.forEach((val) => {
    console.log(val);
});

lang.forEach(printMe);
function printMe(v) {
    console.log(v);
}

lang.forEach((key, val, arr) => {
    console.log(`key ${key}, value ${val}, array ${arr}`);
})

//-----------------------------------------------------------------

let student = [
    { name: "ankit", age: 23, weight: 221 },

    { name: "samia", age: 33, weight: 121 },

    { name: "raita", age: 31, weight: 231 }
]

student.forEach((val) => {
    console.log(`name is ${val.name} weight is ${val.weight}`);
});