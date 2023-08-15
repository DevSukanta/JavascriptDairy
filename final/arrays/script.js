// intro to arrays
// reference type 
// collection of elements 
// ordered collection of items 

// how to create arrays

// let fruits = ["apple", "mango", "orange"];
// let numbers =[1,2,3,4,5];
// let mixed =[1,2,3,"apple", null, undefined, true];

// console.log(fruits);
// console.log(fruits[2]);
// console.log(numbers);
// console.log(mixed);
// fruits[1] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));


// array indexing 

// array push pop 
let fruits = ["apple", "mango", "orange"];
console.log(fruits);
// push 
fruits.push("banana");
console.log(fruits);

// pop 
let poppedFruit =fruits.pop();
console.log(fruits);
console.log("Popped fruits is ", poppedFruit);

// unshift 
fruits.unshift("Bits");
console.log(fruits);

//shift 

let removeFruit = fruits.shift();
console.log(fruits);
console.log("The first remove fruit is ", removeFruit);