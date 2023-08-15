// undefined
let firstname;
console.log(typeof firstname);
firstname="Sukanta";
console.log(typeof firstname, firstname);


// null
let myVariable = null;
console.log(myVariable);
myVariable = "Sukanta";
console.log(myVariable, typeof myVariable);

console.log(typeof null);  //Bug, Error

// BigInt  
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(24); //It was a BigInt
console.log(myNumber);
let sameMyNumber = 25n; // It was also a BigInt
console.log(sameMyNumber);
console.log(myNumber + sameMyNumber);