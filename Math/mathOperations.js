const myDecimalNumber = 15.256;
const myStringNumber = "454.00abcd";

// Number is Interger Method, Returns Boolean
const checkInterger = Number.isInteger(myNumber);

console.log("Checking Integer.. ", checkInterger);
console.log();
console.log();

// ParseFloat Method, Returns Floating Number //For string it removes the excess text string and returns string number converted to number

const checkparseFloat = Number.parseFloat(myDecimalNumber);
const checkparseFloat2 = Number.parseFloat(myStringNumber);

console.log("Checking ParseFloat.. ", checkparseFloat);
console.log("Checking ParseFloat.. ", checkparseFloat2);
console.log();
console.log();

// ParseInt Converts an argument into a Number datatype For strings it removes non numberic datatype and converts to Number datataype without Decimals
const checkparseInt = parseInt(myDecimalNumber);
const checkparseInt2 = parseInt(myStringNumber);

console.log("Checking parseInt.. ", checkparseInt);
console.log("Checking 2arseInt2.. ", checkparseInt2);
console.log();
console.log();

// ToFixed rounds up the decimal places based on argument and also adds to nondecimal integers and returns string
const checkToFixed = myDecimalNumber.toFixed(2);
const checkToFixed2 = myNumber.toFixed(2);

console.log("Checking ToFixed.. ", checkToFixed);
console.log("Checking ToFixed2.. ", checkToFixed2);
console.log();
console.log();

// ToString converts an interger into a string and persists the Decimals
const checktoString = myDecimalNumber.toString();
const checktoString2 = myNumber.toString();
const checktoString3 = myStringNumber.toString();

console.log("Checking toString.. ", checktoString);
console.log("Checking toString2.. ", checktoString2);
console.log("Checking toString3.. ", checktoString3);
console.log();
console.log();

// Number Chaining This means combining Three or More number Operators to get your answer
console.log(parseInt(Number.parseFloat("1234aaa").toFixed(2)));
