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
console.log(Math.random());
console.log(Math.ceil(deciNum));
console.log(Math.floor(deciNum));

