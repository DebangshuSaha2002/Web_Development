// Block scope designed to perform some tasks

//declaring the function
// if we are using a function keyword to make a function 
//then we can call the function before it is declared.
//this is another example of hoisting

// //addNum(2, 3);
// function addNum(a, b) {
//     console.log(a + b);
// }

// //calling the function
// addNum(2, 3);

//another method to make a function

// subNum(5,4); ->wornt work as its of const type 
// const subNum = (a, b) => {
//     console.log(a - b);
// };
// subNum(5, 4);

// const multipleNum = (a, b) => {
//     return a + b;
// };
// const value = multipleNum(3, 4);
// console.log(value);

// //degree
// const toCelsius = (farhenheit) => {
//     const resultValue = farhenheit + " in celsius is " + (5 / 9) * (farhenheit - 32);
//     return resultValue;
// };
// // const celvalue = toCelsius(80).toFixed(2);
// // console.log("celsius", celvalue);
// console.log(toCelsius(80));