let num = 400001212;
let deciNum=231.921;
let newNum = new Number(500);

console.log(num);
console.log(newNum);
console.log(num.toLocaleString());  //to the US standards
console.log(num.toLocaleString(`en-IN`));   //according to indian standards

console.log("\nto precision function lets go.....");
console.log(deciNum);
console.log(deciNum.toPrecision(1));
console.log(deciNum.toPrecision(2));
console.log(deciNum.toPrecision(3));
console.log(deciNum.toPrecision(4));

///////////////////////////////////////////////////////////////////////////////////////////////
//math fucntions()....................

console.log(Math.random());
console.log(Math.ceil(deciNum));
console.log(Math.floor(deciNum));


var mathObj = {
    random: Math.random(),
    abs: Math.abs(-12),
    pow: Math.pow(2, 4),
    floor: Math.floor(12.1211),
    ceil: Math.ceil(12.1211),
};

console.log(mathObj);


//generate random no from 1 to 10

var random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("random from 1 to 10 ::" + random1to10);

//generate random no from 1 to 5

var random1to10 = Math.floor(Math.random() * 5) + 1;
console.log("random from 1 to 10 ::" + random1to10);

//generate random no from 1 to 100

var random1to10 = Math.floor(Math.random() * 100) + 1;
console.log("random from 1 to 10 ::" + random1to10);

