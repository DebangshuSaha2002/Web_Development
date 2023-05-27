//We use object to store information of a particular 
//item

//example

//Below is a car object

// const carObj = {
//     "companyName": "B M W",
//     model: "mini cooper",
//     weight: "1000kg",
//     color: "red/white",
//     groundClearance: 3,
//     seats: 5,
//     horsepower: "1000hp",
// };

// console.log(carObj);

//if only i want the company name then

// console.log(carObj.companyName);

//when there is a space in between the character
//Then use the method below
//as . operator doesnt support spaces
// console.log(carObj["companyName"]);

// //Predefined function of object
// //.keys
// //.values

// const keys = Object.keys(carObj);
// const values = Object.values(carObj);
// console.log(keys);
// console.log(values);

// const userObj = {
//     fname: "Ram",
//     lname: "Sharma",
//     id: 3344,

//     //function inside an object

//     fullName: function() {
//         //using this as i am accesing the valuesof this particular function itself
//         return this.fname + " " + this.lname + " age is " + this.age;
//     },

//     age: 23,
// };
// // console.log(userObj);
// console.log(userObj.fullName());


//H/W
//Write a program to calculate Body Mass Index of an user using function,
//variables and objects

//as per the BMI you need to log different values
//console.log("Obesity");
//console.log("fit");
//console.log("Underweight");