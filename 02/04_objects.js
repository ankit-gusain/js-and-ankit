//creating objects
let newobj = {
    oName: "ankit",
    oClass: "cllg",
    oGender: "male",
    oMarks: 0
};
console.log(newobj.oName);
console.log(newobj.oClass);
console.log(newobj.oGender);
console.log(newobj.oMarks);

//to freeze---
Object.freeze(newobj);
newobj.oClass = "school";
console.log(newobj.oClass); //no error will be reflected neither any change will propagate


//interview question use of symbol dt
let mysymbol = Symbol("s1");

let obj = {
    [mysymbol]: "key1"
};
console.log(obj[mysymbol]);
