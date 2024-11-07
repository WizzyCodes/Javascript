const schoolScore = [
  { name: "Chinedu Okafor", subject: "Mathematics", score: 85 },
  { name: "Amina Abubakar", subject: "English", score: 92 },
  { name: "Emeka Nwosu", subject: "Science", score: 78 },
  { name: "Folake Adeyemi", subject: "History", score: 88 },
  { name: "Ifeanyi Eze", subject: "Mathematics", score: 95 },
];
console.clear();

//1
console.log(
  schoolScore.find(
    (student) => student.name === "Chinedu Okafor" && student.score > 80
  )
    ? `${schoolScore[0].name} score is A`
    : `No student with this name and score was found`
);

//2
console.log(
  schoolScore.find(
    (student) => student.subject === "English" && student.score > 90
  )
    ? `${
        schoolScore.find(
          (student) => student.subject === "English" && student.score > 90
        ).name
      }'s score is A`
    : `No student studying English with this score was found`
);

//3
console.log(
  schoolScore.find((student) => student.name === "Emeka Nwosu")
    ? `${
        schoolScore.find((student) => student.name === "Emeka Nwosu").name
      }'s score is A`
    : schoolScore.find((student) => student.score > 75)
    ? `${
        schoolScore.find((student) => student.score > 75).name
      }'s score is above 75`
    : `No relevant student was found`
);

//4
console.log(
  schoolScore.find(
    (student) => student.subject === "History" && student.score > 85
  )
    ? `${
        schoolScore.find(
          (student) => student.subject === "History" && student.score > 85
        ).name
      }'s score is A`
    : schoolScore.find((student) => student.score > 90)
    ? `${
        schoolScore.find((student) => student.score > 90).name
      }'s score is above 90`
    : `No relevant student was found`
);

//5
console.log(
  schoolScore.find((student) => student.score === 95)
    ? `${
        schoolScore.find((student) => student.score === 95).name
      }'s score is exactly 95`
    : schoolScore.find((student) => student.name === "Ifeanyi Eze")
    ? `${
        schoolScore.find((student) => student.name === "Ifeanyi Eze").name
      }'s score is A`
    : `No relevant student was found`
);

// const foodStuffs = [
//   "Rice",
//   "Beans",
//   "Yam",
//   "Garri",
//   "Poundo",
//   "Plaintain",
//   "Semo",
//   "Salad",
//   "Seafooda",
//   "Indomie",
//   "Beef",
//   "Turkey",
//   "Chicken",
// ];

// const brandNewCar = [
//   {
//     make: "Mercedes Benz",
//     model: "C-Class",
//     year: 2020,
//     features: [
//       "Air Conditioning",
//       "Power Steering",
//       "Cruise Control",
//       "Adaptive Braking",
//       "Ambience Lighting",
//     ],
//     ownerNames: ["John", "Doe"],
//     carMph: ["30mph", "40mph", "60mph", "80mph", "100mph"],
//   },
// ];

// let numbers = [30, 55, 2, 14, 8];

// // Fill
// // console.log("Fill", foodStuffs);

// // const checkingFill = foodStuffs.fill("indomie", 0, 2);
// // console.log("Fill.....", checkingFill);

// // Sort
// // const checkingSortNumbers = numbers.sort(
// //   (smallNumber, bigNumber) => smallNumber - bigNumber
// // );

// // const checkingSortNumbers2 = numbers.sort(
// //   (bigNumber, smallNumber) => bigNumber - smallNumber
// // );

// // console.log("Checking Sort for Numbers", checkingSortNumbers2);

// // const checkingSort = foodStuffs.sort();
// // console.log("Foodstuffs", foodStuffs);

// // Reverse with numbers
// // let numbers = [10, 2, 31, 15, 8];

// // const checkingReverseNum = numbers.reverse();
// // console.log(checkingReverseNum);

// // Reverse
// // const checkingReverse = foodStuffs.reverse();
// // const checkingReverse2 = brandNewCar[0].features.reverse();
// // console.log("Reverse Returns", checkingReverse);
// // console.log("Reverse Returns", checkingReverse2);
// // console.log("Foodstuffs", foodStuffs);

// // LastIndexOF
// // const checkingLastIndexOf = foodStuffs.lastIndexOf("Plaintain");
// // console.log("Last IndexOf", checkingLastIndexOf);
// // console.log(foodStuffs);
// // const checkingLastIndexOf2 = brandNewCar[0].ownerNames.lastIndexOf("John");
// // console.log("Indexof", checkingLastIndexOf2);
// // console.log("Indexof", brandNewCar);
// // console.log(brandNewCar);

// // IndexOf
// // const checkingIndexOf = foodStuffs.indexOf("Plaintain");
// // console.log("IndexOf", checkingIndexOf);
// // console.log(foodStuffs);
// // const checkingIndexOf2 = brandNewCar[0].ownerNames.indexOf("John");
// // console.log("Indexof 2", checkingIndexOf2);
// // console.log("Indexof 2", brandNewCar);

// //slice
// // const checkingSlice = foodStuffs.slice(10, 13);
// // const checkingSlice2 = brandNewCar[0].features.slice(0, 3);

// // console.log("checking slice", checkingSlice);
// // console.log("Slice 2", checkingSlice2);

// // Splice
// // console.log(foodStuffs);

// // const checkingSplice = foodStuffs.splice(0, 2);

// // console.log("Splice", checkingSplice);
// // console.log(foodStuffs);

// // console.log("BrandnewCar", brandNewCar);

// // const checkingSplice2 = brandNewCar[0].ownerNames.splice(
// //   0,
// //   2,
// //   "Samuel",
// //   "Chidera"
// // );

// // console.log("Splice 2", checkingSplice2);

// // console.log(foodStuffs);
// // const checkingSplice2 = brandNewCar[0].ownerNames.splice(
// //   0,
// //   2,
// //   "Isreal",
// //   "Benita"
// // );

// // console.log("brandNewCar", brandNewCar);

// // ToString
// // const checkingToString = foodStuffs.toString();
// // console.log("first toString", checkingToString);

// // console.log("foodstuffs", foodStuffs);

// // const checkingToString2 = brandNewCar[0].carMph.toString();

// // console.log("To String", checkingToString2);

// // console.log("brandnewcar", brandNewCar);

// const person = {
//   name: "prince",
//   height: 17,
//   status: "single",
//   state: "lagos",
//   profession: "software engineer",
//   gender: "Male",
//   confirmGender: true,
// };
// // Mutation in Arrays

// const preciousStones = ["gold", "pearl", "onyx", 500, true, undefined, null];

// const beforeMutateArray =
//   ((preciousStones[0] = "diamond"),
//   ((preciousStones[1] = "emerald"),
//   ((preciousStones[2] = "ruby"),
//   (preciousStones[3] = 100),
//   (preciousStones[4] = false),
//   (preciousStones[5] = "Defined"),
//   (preciousStones[6] = null))));

// preciousStones[0] = "diamond";
// preciousStones[1] = "emerald";
// preciousStones[2] = "ruby";
// preciousStones[3] = 100;
// preciousStones[4] = false;
// preciousStones[5] = "defined";
// preciousStones[6] = null;

// console.log("After Array has been Mutated ", beforeMutateArray);
// console.log("After Array has been Mutated ", preciousStones);

// // Mutation in Objects

// const beforeMutateObject = person;

// console.log("Before Object was Mutated ", beforeMutateObject);

// const afterMutate =
//   ((person.name = "Mijay"),
//   (person.height = 15),
//   (person.status = "divorced"),
//   ((person.state = "kano"),
//   (person.profession = "Banker"),
//   (person.gender = "Others"),
//   (person.confirmGender = true)));

// //   Outside a variable
// person.name = "Kenny";
// person.height = 10;
// person.status = "second wife";
// person.state = "Ogun";
// person.profession = "Agba Coder";
// person.gender = "Female";
// person.confirmGender = true;

// console.log("After Mutate", afterMutate);
// console.log("After Mutate", person);
