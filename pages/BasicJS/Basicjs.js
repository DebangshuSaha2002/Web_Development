// console.log("Hello world");
// //how to declare a variable in JS
// //we can re-declare that variable
// //we can re-assign value of that variable
// //we can call that variable before it is declared


// var myName = "Debangshu";
// // var myName = "DebSaha" //redeclaring the variable
// // myName = "Amit"; //re-assigning the value to a variable     
// console.log(myName); //console.log is like printf in c

// //Next way to declare variable
// //we cannot re-declare a variable created by let keyword
// //we cannot re-assign a value to the let variable
// //we cannot call that variable before its initialisation

// let myLastName = "Saha";
// console.log(myLastName);

// //Next way to declare variable
// //We cannot re-declare a variable
// //We cannot re-assign a value to that variable
// //We cannot call that variable before initialisation

// const myPrefix = "Mr";
// console.log(myPrefix);

//hoisting in JS -->Most Important
//possible only in var
//can be solved using let and const

// console.log(myName);
// var myName = "debangshu";
// console.log("-------------");
// console.log(myName);

// let num1 = 5;
// let num2 = num1 * 10;
// console.log(num2);

//increment and decrement

// let num1 = 4;
// ++num1;
// const num2 = num1 ** 4; //power
// console.log(num2);

// let num1 = 5;
// let num2 = 5;
// num1 = num1 * num2;
// console.log(num1);

// let num1 = 5;
// let num2 = 5;
// num1 *= num2;
// num1 **= num2;
// console.log(num1);

// const num1 = 10;
// const num2 = "10";
// console.log(typeof num1, num1);
// console.log(typeof num2, num2);
// const value = num1 == num2;
// //3 equals also checks the value as well as check whether the values are of the same type or not;
// const value2 = num1 === num2;
// console.log(value);
// console.log(value2);

//comparison operator

// const num1 = 9;
// const num2 = 10;
// console.log(num1 < num2);

// const myAge = 16;
// const myName = "Rajesh";
// const concatedValue = myName + " age is " + myAge;
// console.log(concatedValue);

//another way is

// const concatedValue = `${myName} age is${myAge}`;
// console.log(concatedValue);


//nullish operator

// let x = null;
// x ? ? = 5;
// console.log({ x });


//ternary operators
//"logic"?"true":"false"

// const x = 100;
// x >= 100 ? console.log(true) : console.log(false);

//another example of ternary operator

// const num1 = 100;
// const num2 = '200';
// num1 > 250 ? console.log("true true") : num2 == '200' ? console.log("true") : console.log("false false");