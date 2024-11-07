// Math Methods
// Math.min
// Math.max
// Math.pow
// Math.Round
// Math.trunc
// Math.PI
// Math.floor
// Math.ceil
// Math.Random

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

const valueOfPi = Math.PI;
console.log("Javascript PI method: ", valueOfPi);

const truncMethod = Math.trunc(Math.PI);
console.log("Javascript Trunc method: ", truncMethod);

const powMethod = Math.pow(2, 5);
const powMethod2 = Math.pow(5, 3);
console.log("Javascript POW method: ", powMethod2);

const minMethod = Math.min(...numberArray);

// console.log("Javascript Min method: ", Math.min(1, 2, 0.5, 4, 5));

// console.log(
//   "Javascript Min method: ",
//   Math.min(0.3, 1.2, 5.9, 0.034, 2.23, 4, 0.01)
// );
console.log("Javascript Min Array method: ", minMethod);
console.log();
console.log();
console.log();

const MaxMethod = Math.max(1, 2, 3, 4, 5);
const MaxMethod2 = Math.max(0.032, 0.021, 0.12, 0.344, 0.502, 0.0232);

console.log("Javascript Max method: ", MaxMethod);
console.log("Javascript Max method: ", MaxMethod2);

const roundMethods = Math.round(Math.PI);
const roundMethods2 = Math.round(5.7302392);

console.log("Javascript Round method: ", roundMethods);
console.log("Javascript Round method: ", roundMethods2);

const ceilMethods = Math.ceil(Math.PI);
const ceilMethods2 = Math.ceil(6.1231);
const ceilMethods3 = Math.ceil(2.003282);

console.log("Javascript Ceil method: ", ceilMethods);
console.log("Javascript Ceil method: ", ceilMethods2);
console.log("Javascript Ceil method: ", ceilMethods3);

const floorMethods = Math.floor(Math.PI);
const floorMethods2 = Math.floor(6.1231);
const floorMethods3 = Math.floor(2.003282);

console.log("Javascript floor method: ", floorMethods);
console.log("Javascript floor method: ", floorMethods2);
console.log("Javascript floor method: ", floorMethods3);

//Math.Random
const defaultMathRandom = Math.random();
const mathRandom = Math.random() * 10;
// Chaining with math.random
const chainMathRandom = Math.floor(Math.random() * 10) + 1;
console.log("Math.Random", chainMathRandom);

console.clear();

let myName = "AmakaMercy";
const randNames = myName.charAt(Math.floor(Math.random() * myName.length) + 1);
console.log(randNames);

const arrayRandomNames = [
  "wisdom",
  "sixtus",
  "mije",
  "praise",
  "choima",
  "gift",
  "mercy",
  "isreal",
  "ibrahim",
  "kenny",
  "samuel",
];

const dupRandomName =
  arrayRandomNames[Math.floor(Math.random() * arrayRandomNames.length)];
console.log(dupRandomName);
