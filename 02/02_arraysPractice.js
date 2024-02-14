//Q5
// //------------------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 1];
// let mini = -1;

// for (let i = 0; i < 6; i++) {
//     if (arr[i] > mini) {
//         mini = arr[i];
//     }
// }
// console.log(mini);


//------------------------------------------------------
//Q4
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }
// console.log(fact);



//------------------------------------------------------
//Q3
// let num = 287156;
// let countsum = 0;

// while (num != 0) {
//     let copy = num % 10;
//     countsum += copy;
//     num = Math.floor(num / 10);

// }
// console.log(countsum);


//------------------------------------------------------
//Q2
// let num = 287152;
// let count = 0;

// while (num != 0) {
//     num = Math.floor(num / 10);  // Fix: Divide num by 10
//     count++;
// }

// console.log(count);


//------------------------------------------------------
//Q1
// var arr = [1, 2, 3, 4, 2, 3, 4];
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//         arr.splice(i, 1);
//     }
//     console.log(arr);
// }