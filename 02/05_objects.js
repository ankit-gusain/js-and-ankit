// let obj1 = {
//     qmname: "ankit",
//     qmid: 123,
//     qmaddress: "delhi",
//     qmmship: "3yrs"
// }

// let obj2 = {
//     mname: "chikit",
//     mid: 321,
//     maddress: "delhi",
//     mmship: "1.4yrs"
// }

// // x let obj3 = ob1 +obj2;

// //object.assign(   {}-empty obj act as target   ,   obj1,obj2,obj3.....-source   )--- to assign
// let obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// //spread operator {}...obj1,...obj2}-- modern and widely used to assign
// let obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// //Object.keys()
// //Object.values()
// //Object.entries()

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

// //if values exists or doesnot exists
// console.log(obj4.hasOwnProperty("games"));
// console.log(obj4.hasOwnProperty("qmid"));


//object destrcuting.......

let kid = {
    kidName: "ankit",
    kidClass: "1st",
    kidAge: "10years",
    color: "green"

};

console.log(kid.kidName);
let { kidName: kname } = kid;       //destructuring
console.log(kname);