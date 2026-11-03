//Array
let fruits = []; //empty array
let fresh_fruits = ["apple", "banana", "mango", "orange"]; //array with values
// 4 items in the array, indexes 0,1,2,3

let arr = [1, 2, 3, 4, 5];
// 5 items in the array, indexes 0,1,2,3,4

console.log(arr.length); // number of items in the array
console.log(arr[0]);// first item in the array
console.log(arr[4]);// last item in the array

console.log(arr[5]); //undefined, index out of range

let mixed_arr = [1, "hello", true, null, undefined, {name: "John"}, [1, 2, 3]]; 
console.log(mixed_arr[6]);

/*arr.length is the number of items (length is a property, not a function, so no ())
arr[0] is the first item, arr[3] is the last item here
Reading an index that does not exist gives undefined
A JavaScript array can mix numbers, strings, booleans, and null together*/


