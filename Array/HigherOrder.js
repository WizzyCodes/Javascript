const students = [
    {
      name: "Alice",
      age: 22,
      scores: { math: 85, english: 92, science: 88 },
      courses: ["Math", "English", "Science"],
    },
    {
      name: "Bob",
      age: 24,
      scores: { math: 78, english: 85, science: 90 },
      courses: ["Math", "History", "Science"],
    },
    {
      name: "Charlie",
      age: 23,
      scores: { math: 92, english: 88, science: 95 },
      courses: ["Math", "English", "Art"],
    },
    {
      name: "David",
      age: 25,
      scores: { math: 95, english: 82, science: 80 },
      courses: ["Math", "English", "Science", "Art"],
    },
];
  
// //   const alphabets = ["a", "k", "f", "b", "g", "m", "i", "p"];
// //   const numbers = [30, 55, 2, 14, 8];
  
// //   console.log("Viewing Students", students);

  
// //   console.log("sorted value", alphabets.sort());
// //   console.log(
// //     "Sorted Number",
// //     numbers.sort((smallNumber, bigNumber) => smallNumber - bigNumber),
// //     numbers.sort((smallNumber, bigNumber) => bigNumber - smallNumber));
// // console.clear();

// // const checkingMap = students.map((wiz) => {
// //     return wiz.name;
// // });
// // console.log(checkingMap);
// // console.clear();

// // let X = "YXZ";
// // let user = "XYZ";

// // const ourFunction = (x,y) => {
// //   let xSplit = X.split("");
// //   let userSplit = y.split("");

// //   let resultUser = userSplit.sort().join("");
// //   let resultX = xSplit.sort().join("");

// //   if (resultUser === resultX) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // console.log(ourFunction(X,user));

// // let a = [1,4,3,7,11];

// // console.log(
// //   a.map((el) => {
// //     return el*2;
// //   })
// // );

// // let xx = Array.from({length: 10 }, () => {
  
// // }

// // );


const numbs = [1, 2, 3, 4, 5];
const numb = [10, 6, 17, 22, 35];
const numberArray = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];

// FlatMap
const stuNameAndCourse = students.flatMap((el) => {
  const getValues = el.courses;

  return `${el.name} has this courses ${getValues}`;
});

console.log(stuNameAndCourse);

const upperCaseCourses = students.flatMap((student) => {
  const checkCourse = student.courses.join(" ").toUpperCase();
  return checkCourse;
});

console.log(upperCaseCourses);

// Flat
const checkFlatt = numbs.flat();

console.log("...", checkFlatt);

// from
const newArr = Array.from({ length: 20 }, (a, index) => index);

console.log("...", newArr);

const stuNames = Array.from(students, (student) => student.name);
console.log(stuNames);

const allScores = Array.from(students, (student) => {
  let getmaths = student.scores.math;
  let getEnglish = student.scores.english;
  let getScience = student.scores.science;

  return `${student.name} has a math score of ${getmaths} and english score of ${getEnglish} and science score of ${getScience}`;
});

console.log(allScores);

// ForEach
const getStuScore = students.forEach((student) => {
  const both = student.scores.math;
  const bothEng = student.scores.english;
  console.log(`${student.name} : Math = ${both}, English = ${bothEng}`);
});


const forEachh = students.forEach((student, index) => {
  console.log("For", `${student.name} this is the index ${index}`);

  return student.name;
});

console.log("ForEach ...", forEachh);

// Every
const allEvery = students.every((student) => {
  return student.age > 20;
});

const allEvery2 = students.every((props) => {
  return props.courses.includes("Art");
});

console.log("Every ...", allEvery2);
console.log(`${allEvery2}`);

// FindIndex
const getScienceIndex = students.findIndex((props) => {
  const hello = props.courses.findIndex((el) => {
    return el[2] === "Science";
  });
  return hello;
});

console.log("FindIndex ...", getScienceIndex);

const findtheIndex = students.findIndex((el) => {
  return el.name === "David";
});

// Find
const FindAll = students.find((props) => {
  return props.name === "David";
});

const letsFindALl = students.find((props) => {
  return props.age <= 23;
});

console.log("Find ...", letsFindALl);

// Reduce Right
const getTotalNumRight = numb.reduce((total, currentVal) => {
  return total + currentVal;
});

console.log("Reduce Right", getTotalNumRight);

//Reduce
const getMax = numbs.reduce((a, b) => Math.max(a, b), -Infinity);

console.log("....Reduce ", getMax);

const getTotalNum = numbs.reduce((total, currentVal) => {
  return total + currentVal;
});

const getTotalObj = students.reduce((total, currentVal, index, element) => {
  console.log("This is the element for students Array", `${element}`);
  return total + currentVal + index;
});

console.log(`${getTotalObj}`);

// Some
const checkSome = students.some((student) => {
  const checkStuName = student.name === "Charlie";

  return checkStuName;
});

const checkSome2 = students.some((student) => {
  return student.age <= 25;
});

const getStudent = students.filter((student) => {
  const checkcourse = student.courses.some((course) => {
    return course === "Art";
  });
  return checkcourse;
});

console.log("", getStudent);

console.log("Student that the name is charlie exist is", checkSome);
console.log();
console.log("Student that the name is charlie exist is" , `${checkSome}`);

// Map
const checkingNames = students.map((student) => {
  const getNames = student.name;
  return getNames;
});

const checkingScores = students.map((student) => {
  return student.scores;
});

const getNameandScore = students.map((student) => {
  return { name: student.name, score: student.scores, course: student.courses };
});

const checkAges = students.map((student) => {
  return student.courses.length;
});

console.log("Map1 = ", checkingNames);
console.log("Map2 = ", checkingScores);
console.log("Map3 = ", getNameandScore);
console.log("Map3 = ", checkAges);

let x = "YXZ";
let user = "XYz";

const ourFunction = (x, y) => {
  let xSplit = x.split("");
  let userSplit = y.split("");

  let resultUser = userSplit.sort().join("").toUpperCase();
  let resultX = xSplit.sort().join("").toUpperCase();

  if (resultUser === resultX) {
    return true;
  } else {
    return false;
  }
};

console.log("reading", ourFunction(x, user));

let a = [1, 4, 3, 7, 11, 19, 15];

console.log(
  "Applying Map",
  a.map((el) => {
    return el;
  })
);

console.log();

console.log(
  "Applying Sort",
  a.sort((a, b) => {
    return b - a;
  })
);

console.log(
  "Applying Filter",
  a.filter((el) => {
    return el < 5;
  })
);

console.log();

let entry = [
  {
    id: 1,
    name: "Mije",
    age: 20,
  },
  {
    id: 2,
    name: "Gift",
    age: 10,
  },
  {
    id: 5,
    name: "Gift",
    age: 15,
  },
  {
    id: 4,
    name: "Gift",
    age: 7,
  },
  {
    id: 3,
    name: "John Doe",
    age: 30,
  },
];

const search = (arr, user) => {
  let searchResults = arr.filter((el) => {
    return el.name === user;
  });

  return searchResults;
};

console.log("Filter Search", search(entry, "John Doe"));

const remove = (arr, id) => {
  let removedUser = arr.filter((el) => {
    return el.id !== id;
  });

  return removedUser;
};

console.log("Filter Remove: ", search(entry, 1));

console.log(
  entry
    .map((el) => {
      return el.name;
    })
    .sort()
);

let xx = Array.from({ length: 10 }, () => {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@^%";

  let score = Math.round(Math.random() * 100);
  let randomNames = Math.round(Math.random() * letters.length);

  return `${randomNames} ${score}`;
});

console.log(xx);


// const markplace = [
//   {
//     client: {
//       id: 101,
//       name: "Jessica Felix",
//       email: "jessicafelix@code.com",
//       location: "New York, USA",
//     },
//     product: [
//       {
//         id: 1,
//         name: "Laptop",
//         price: 1200,
//         category: "Elecronics",
//         stock: 50,
//       },
//       {
//         id: 2,
//         name: "Smartphones",
//         price: 800,
//         category: "Electronics",
//         stock: 30,
//       },
//       {
//         id: 3,
//         name: "Tablet",
//         price: 450,
//         category: "Elecronics",
//         stock: 20,
//       },
//     ],
//   },
//   {
//     client: {
//       id: 102,
//       name: "Daniel George",
//       email: "danielgeorge@gmail.com",
//       location: "Los Angeles, USA",
//     },
//     product: [
//       {
//         id: 4,
//         name: "Headphone",
//         price: 150,
//         category: "Accessories",
//         stock: 100,
//       },
//       {
//         id: 5,
//         name: "Keyboard",
//         price: 70,
//         category: "Accessories",
//         stock: 150,
//       },
//       {
//         id: 6,
//         name: "Mouse",
//         price: 50,
//         category: "Acessories",
//         stock: 200,
//       },
//     ],
//   },
//   {
//     client: {
//       id: 103,
//       name: "Charlie Openda",
//       email: "charlieopenda@codelab.com",
//       location: "Chicago, USA",
//     },
//     product: [
//       {
//         id: 7,
//         name: "chair",
//         price: 300,
//         category: "Furniture",
//         stock: 10,
//       },
//       {
//         id: 8,
//         name: "Desk",
//         price: 500,
//         category: "Furniture",
//         stock: 5,
//       },
//       {
//         id: 9,
//         name: "Lamp",
//         price: 100,
//         category: "Furniture",
//         stock: 25,
//       },
//     ],
//   },
// ];

// //1

// const allProductNames = markplace.map((mark) => {
//   return mark.product.map((names) => {
//     return names.name;
//   });
// });
// console.log(allProductNames);

// // 2

// let allPrices = markplace.map((mark) => {
//   return mark.product.map((prices) => {
//     return prices.price;
//   });
// });
// console.log(allPrices);

// //3
// const allCategory = markplace.map((mark) => {
//   return mark.product.map((categories) => {
//     return categories.category;
//   });
// });

// console.log(allCategory);

// //4
// const allStock = markplace.map((mark) => {
//   return mark.product.map((stocks) => {
//     return stocks.stock;
//   });
// });
// console.log(allStock);

// //5
// const allId = markplace.map((mark) => {
//   return mark.product.map((ids) => {
//     return ids.id;
//   });
// });
// console.log(allId);

// //6
// let x;
// const numberOfProducts = markplace.map((mark) => {
//   return mark.product.map((names) => {
//     return names;
//   });
// });
// console.log(
//   numberOfProducts.map((el) => {
//     return el.length;
//   })
// );

// //7
// const totalPrice = markplace.map((mark) => {
//   return mark.product.map((values) => {
//     return values.price * values.stock;
//   });
// });
// totalPrice.map((el) => {
//   return;
// });

// console.log(totalPrice);

// const totalStock = markplace.map((mark) => {
//   return mark.product.map((values) => {
//     return values.stock;
//   });
// });

// let total = totalPrice.map((el) => {
//   return el.map * totalStock;
// });

// console.log(total);

// //8
// const clientAbove500 = markplace.map((el) => {
//   return el.product.map((el) => {
//     return el.price;
//   });
// });

// console.log(
//   clientAbove500.map((el) => {
//     return el.filter((el) => {
//       return el > 500;
//     });
//   })
// );

// //9
// const allElectronics = markplace.map((el) => {
//   return el.product.map((el) => {
//     return el.category;
//   });
// });

// console.log(
//   allElectronics.map((el) => {
//     return el.filter((el) => {
//       return el === "Electronics";
//     });
//   })
// );

// //10
// const stockLessThan20 = markplace.map((el) => {
//   return el.product.map((el) => {
//     return el.stock;
//   });
// });

// console.log(
//   stockLessThan20.map((el) => {
//     return el.filter((el) => {
//       return el < 20;
//     });
//   })
// );