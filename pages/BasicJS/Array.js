//array in JS
//Variables who can store multiple type of data and more than a value

// const arr = [1, 2, 3, 4, "rahul", false, 1.9999];
const arr1 = [10, 20, 30, 40];
// [0, 1, 2]
// console.log(arr[1]);

//1. length

//console.log(arr1.length());

//2. toString()
//console.log(arr1.toString());

//3. join()
// console.log(arr1.join(""));

//4.pop()
// const popedValue = arr1.pop();
// console.log(popedValue);
// console.log(arr1);
// arr1.pop();
// console.log("After second pop:", { arr1 })

//5. push ->pushes to the end of the array
// console.log("Array before push", arr1);
// arr1.push(100);
// console.log("Array aftr push", arr1);

//6.shift ->default left shift -> basically removes the first value

//pop removes value from end of array and shift from the start of the array
//very imp diff between shift and pop

// console.log("Before Shift", arr1);
// const shiftedValue = arr1.shift();
// console.log(shiftedValue);
// console.log("After shift", arr1);

//7. unshift
//unshift adds a value to the start of the array
//push adds to the end of the array and unshift to the start of the array
// console.log("Before unshift", arr1);
// arr1.unshift(200);
// console.log("After unshift", arr1);

//8. concat()
// const arr = [3, 4, 5];
// const arr2 = ["rahul", 4, false];
// console.log(arr1.concat(arr, arr2));

//9. splice() ->>very very imp
// console.log("Before splice", arr1);
// //splie(index,how many values you want to remove,what we want to put at that index)
// arr1.splice(2, 0, "rahul", "Rajesh");
// console.log("After Splice", arr1);

// 10. slice() ->>very very imp
//doesnt change the array, but returns a new array 
//so we need to store the changes in a variable
//original array effect nehi hoga

// console.log("Before slice", arr1);
// const sliceValue = arr1.slice(2);
// console.log({ sliceValue });
// console.log("After slice", arr1);

//11. sort() **
//sort doesnt work with 2 digit number in an array
// as it sorts only the first index value of a number
// so 2 digit number wont work

//so to deal with this we use these parameter
// const arr3 = [5, 65, 7, 90, 10, 0, 7];
// const sortedArr = arr3.sort((a, b) => a - b);
// console.log({ sortedArr });

//12 . reverse()
// console.log(arr1.reverse());