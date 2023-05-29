console.log("Strin. js runs here");

//manipulating text
// const str = "Debangshu saha";
// index of above string 0 1 2 3 4 5 6 7 8 9 10 11 12 13
const str1 = "Rajesh sHarma";
const str2 = "Hi there, my name is rajesh.rajesh is a good boy";
// console.log(str2);

// const str = "Hello world";
// console.log(str);

// //inbuild method of String
// //1.length

// //Used to calculate length of the string
// const strLength = str.length;
// console.log(strLength);

// // 2.Uppercase & lowercase
// const caseChange = str1.toLowerCase();
// console.log(caseChange);

// // 3. Replace function
// // /rajesh/g->globally change rajesh
// const replaceStr = str2.replace(/rajesh/g, "Ram");
// console.log(replaceStr);

//4.concat function
// const concat = str1.concat(str2);
// console.log(concat);

//advance functions of strings

// 5.slice
// const slicedStr = str.slice(5);

// const slicedStr = str.slice(1, 4);

// const str4 = " ram  rajesh";
// const slicedStr = str4.slice(-5, -2);
//  0  1  2  3 
// -4 -3 -2 -1   reverse value of the string also gets saved
// console.log(slicedStr);
// console.log(slicedStr.length);

//6. substring
// const colors = "Blue, Purple, Green";
// const subColors = colors.substring(1, 4);
// console.log(subColors);

//7. trim
// const colors = "     Blue, Purple, Green";
// console.log(colors.length);

//.trimStart() -> to trim spaces from start
//.trimEnd() -> to trim spaced from end
// const trimColor = colors.trim();
// console.log(trimColor.length);

//8. charAt
// const str8 = "rahul";
// const charStr = str8.charAt(1);
// console.warn(charStr);

//charCodeAt
const str8 = "rAhul Sharmaram jain";
const str6 = "ram | rajesh | rakesh";
//returns the unicode value of the char at that particular index
// const charStr = str8.charCodeAt(1);
// console.warn(charStr);

// 9. Access a particular value in string

// const partStr = str8[2];
// // str2[0] = "R" //We cannot manipulate string
// //we can do it this way
// const replacedStr = str8.replace("r", "R");
// console.log(replacedStr);

//10. split 

//This is converting the entire string as an array

//separated by space
const splitStr = str6.split("|");
console.log(splitStr);


//  H/W

// Reverse of a string
// eg "rahul"  then output should be "luhar"

// "hah" --> "hah" --> log(entered string is perfectly matched/palindrome)

// if string is empty log kindly pass some value otherwise
// else string convert uppercase and then convert those values
// to an array
//possible that user can pass space in your string. So you
//need to take care that extra space is removed

//Test case
// "" -> log(pass some value);
// "    rajesh   " -> ["R","A","J","E","S","H"];

const str = "debangshu";
const reverse = str.split();
const ans = reverse.reverse();
console.log(ans);