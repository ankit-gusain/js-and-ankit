//== --checks only value
//=== --checks dt and value both 

if (2 == "2") {
    console.log('2 == "2"');
}
else {
    console.log('2 not == "2"');
}
//---------------------------------------------------------------
if (2 === "2") {
    console.log('2 === "2"');
}
else {
    console.log('2 not === "2"');
}
//---------------------------------------------------------------
if (2 == 2) {
    console.log('2 == 2');
}
else {
    console.log('2 not == 2');
}
//---------------------------------------------------------------
if (2 === 2) {
    console.log('2 === 2');
}
else {
    console.log('2 not === 2');
}
//---------------------------------------------------------------

//loops

// for-----for of , for in
// while
// do while

//for
let arr=[1,2,3,4,5,51];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//for of
heros=["hulk","iron","thor","spider","america","hawk"];
for (const hero of heros) {
    console.log(hero);
}

//for in  Iterating over object properties

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
