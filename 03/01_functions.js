//parameters when defining the function 
//arguments when calling the function 

// function addNum(a, b) {
//     console.log(a + b);
// }
// addNum(2, 4);
// let result = addNum(2, 4);
// console.log(result); //will give undefined why ??   RETURN KUCH NHI HORHA STORE NHI HORHA THEN ALSO CONSOLE KARA RHE HAI
//                      // IMPLIES RESULT KE ANDAR ABHI KUCH NHI HAI HENCE UNDEFINED HI AAEGA


function addNums(a, b) {
    return a + b;
}

let sum = addNums(2, 5);
console.log(`sum is ${sum}`); // completely fine

//passing function with default args and undefined in fucntions
function passpass(username = "sam", id) {
    return (`username :${username} with id :${id} just logged in `);
}

console.log(passpass());   //------- sam undefined
console.log(passpass("ankit", 1));  //-- ankit 1

