//foreach loop doesnot return any thing 

// let arr = [1, 2, 3, 4, 5, 51];
// let num = arr.forEach((val) => {
//     console.log(val)
// });
// console.log(num); //undefined

//----------------------------------------------------------------

//filter

// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.filter((num) => {
//     return num > 3;
// });

// console.log(newNums);

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", edition: 2000 },
    { title: "1984", author: "George Orwell", genre: "Fiction", edition: 1900 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", edition: 2010 },
    { title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult", edition: 2020 },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", edition: 2010 },
    { title: "The Girl on the Train", author: "Paula Hawkins", genre: "Thriller", edition: 1989 },
    { title: "The Road", author: "Cormac McCarthy", genre: "Fiction", edition: 2002 },
    { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", edition: 2010 },
    { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", edition: 2001 },
    { title: "The Fault in Our Stars", author: "John Green", genre: "Young Adult", edition: 2010 }
];


// const userBooks = books.filter((bk) => {
//     return (bk.genre === "Thriller" && bk.edition == 1989);
// })
// console.log(userBooks);

//---------------------------------------------------------------------------
//reduce

// let arr = [1, 2, 3, 4, 5];
// let total = arr.reduce(function (acc, currVal) {
//     console.log(`accumutor -${acc} current value -${currVal}`);
//     return (acc + currVal)
// }, 0); // starting with 0 (passed as an initial value to accumulator)
// console.log("Total :" + total);

//----------------------------------------------------------------------------

let total = books.reduce((acc, books) => {
    return (acc + books.edition)

}, 0);

console.log("total :" + total);