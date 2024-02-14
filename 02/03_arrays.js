
//to merge;
//.push() isnt much suitable and retruns the same arr
//concat() merges and return the op in the new arr; 
//spread() much effective and letest works similar to concat
//flat(depth(default infinity for ease))

let marvelHeroes = ["thor", "ironman", "hulk"];
let dcHeroes = ["batman", "superman", 'flash'];

let allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);


let nums = [1, 2, [3, 4], [4, 5, [6, 7, 8]], 9];
console.log(nums.flat(Infinity));

//Array.isArray()--static method that determines whether the passed value is an Array returns true/false.
//Array.from()--static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//Array.ofArray()--

console.log(Array.isArray("ankit"));
console.log(Array.from("ankit"));
console.log(Array.of("ankit"));



