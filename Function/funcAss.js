// // // // 1. Filter Even Numbers
// // // const Even = [1, 2, 3, 4, 59, 15, 100];
// // // const filterEven = (arr) => arr.filter((num) => num % 2 === 0);
// // // console.log(filterEven(Even));

// // // // 2. Contains Element
// // // const v = [1, 2, 3];
// // // const containsElement = (arr, value) => arr.includes(value);
// // // console.log(containsElement(v));

// // // // 3. Reverse Array

// // // const reverseArray = (arr) => [...arr].reverse();

// // // // 4. Is Even

// // // const isEven = (num) => ({ value: num, isEven: num % 2 === 0 });

// // // // 5. Filter Odd Numbers

// // // const filterOdds = (arr) => arr.filter((num) => num % 2 === 1);
// // // console.log(filterOdds(v));

// // // // 6. Is Palindrome

// // // const isPalindrome = (str) => str === [...str].reverse().join("");
// // // console.log(isPalindrome("ROTOR"));

// // // // 7. Login

// // // const login = (username, password) => {
// // //   const predefinedUsername = "admin";
// // //   const predefinedPassword = "password";
// // //   return username === predefinedUsername && password === predefinedPassword
// // //     ? "Login successful!"
// // //     : "Login failed!";
// // // };

// // // // 8. Generate Password
// const generatePassword = (length) => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   const numbers = "0123456789";
//   return Array(length)
//     .fill()
//     .map(() =>
//       Math.random() < 0.5
//         ? letters[Math.floor(Math.random() * letters.length)]
//         : numbers[Math.floor(Math.random() * numbers.length)]
//     )
//     .join("");
// };

// console.log(generatePassword(3));

// // 9. Assign House

// const assignHouse = (studentName) => {
//   const houses = ["Red House", "Blue House", "Green House", "Yellow House"];
//   return {
//     studentName,
//     house: houses[Math.floor(Math.random() * houses.length)],
//   };
// };
// console.log(assignHouse("yellow"));
// console.log(assignHouse("geat"));
// console.log(assignHouse("mercy"));
// console.log(assignHouse("musa"));

// // 10. Generate Employee Details

// const generateEmployeeDetails = (name, company) => {
//   const roles = [
//     "Manager",
//     "Developer",
//     "Human Resource",
//     "Personnel",
//     "Secretary",
//     "Supervisor",
//   ];
//   return {
//     id: Math.floor(Math.random() * 9000) + 1000,
//     email: `${name.toLowerCase()}@${company.toLowerCase()}.com`,
//     role: roles[Math.floor(Math.random() * roles.length)],
//     name: `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`,
//   };
// };
// console.log(generateEmployeeDetails("wisdom", "wizzyrolly"));

// // let arrayOfNames = ["Prince", "Ahmed", "Habeeb", "Joan"];

// // let arrayOfNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let sportsHouses = ["Red House", "Blue House", "Green House", "Yellow House"];

// // // Create Letter Variables
// // const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// // const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // const numbers = "0123456789";
// // const symbols = "!@#$%^&*()_+-|?";
// // // .................

// // // 8

// // const passwordGenerator = (lengthh) => {
// //   const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

// //   const randomPassLength = Array.from({ length: lengthh }, () => {
// //     return allCharacters[Math.floor(Math.random() * allCharacters.length)];
// //   });

// //   const result = randomPassLength.join("");

// //   return result;
// // };

// // console.log();
// // console.log();
// // console.log("8: ", passwordGenerator(4));
// // console.log();
// // console.log();
// // console.log();

// // // 1
// // const filterEven = (array) => {
// //   const evenNumbers = array.filter((el) => {
// //     return el % 2 === 0;
// //   });

// //   return evenNumbers;
// // };

// // console.log("1: ", filterEven(arrayOfNumbs));

// // // 2
// // const containsElement = (array, element) => {
// //   const checkEl = array.includes(element);
// //   if (checkEl === true) {
// //     return `Yes ${element} is in the array`;
// //   } else {
// //     return `No ${element} is not in the array`;
// //   }
// // };

// // console.log("2: ", containsElement(sportsHouses, "Red House"));

// // // 3
// // const reverseArray = (array) => {
// //   const revarr = array.reverse();

// //   return revarr;
// // };

// // console.log("3: ", reverseArray(arrayOfNames));

// // // 4
// // const isEven = (num) => {
// //   let myNum = num;

// //   if (myNum % 2 === 0) {
// //     return `${myNum} is an even number`;
// //   } else {
// //     return `${myNum} is an odd number`;
// //   }
// // };

// // console.log("4: ", isEven(6));
// // console.clear();

// // let arrofID = [12345, 5674, 8292, 3284, 1922, 4382, 2230, 7344, 4393];

// // const splicedOut = arrofID.splice(arrofID.indexOf(12345), 1);
// // console.log(arrofID);
let boardMeeting = ["Smith", "Johnswon"];
let boardMeeting2 = ["Smith", "Johnswon"];
let finaL = boardMeeting.unshift(boardMeeting2);
console.log(finaL);
