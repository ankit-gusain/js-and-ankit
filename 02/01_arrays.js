// let arr = ["1", 2, "apple", "2.2", [2, 2.2, "2.222"], "three"];
// console.log(arr);

let newarr = [1, 2, 3, 4, 5, 6];
console.log(newarr.slice(1, 3));
//reads from the org arr and doesnot affect the arr after execution 
//doesnot include the last index (3)----> only 1,2
console.log(newarr.splice(1, 3));
//reads and manipulates the org array after execution
//includes last index but main differnce is it affects the org arr
console.log(newarr.slice(1, 3));
//same//

