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

// For duplicating Iteratable Datatypes like Arrays and Objects

const duplicatedArr = [...students];

// console.log(duplicatedArr);

// To Merge Scores in Iteratable Datatypes like Arrays and Objects

const mergeAllScores = {
  ...duplicatedArr[0].scores,
  ...duplicatedArr[1].scores,
};

const aliceScore = { ...duplicatedArr[0].scores };

const bobScore = { ...duplicatedArr[1].scores };

const getScores = [aliceScore, bobScore];
const getALL = getScores
  .map((el) => Object.values(el))
  .flat(2)
  .reduce((a, b) => a + b);
console.clear();

// console.log("Checking Scores", getALL);

// To Add to the Array
const newStudent = {
  name: "Kenny",
  age: 29,
  scores: { math: 62, english: 45, science: 48 },
  courses: ["Math", "English", "Science"],
};

const updatedStudents = [...duplicatedArr, newStudent];

// console.log(updatedStudents);

// To Edit or Update
const editCharlie = duplicatedArr.map((students) => {
  const checkCharlie = students.name === "Charlie";
  const runUpdate = checkCharlie
    ? { ...students, courses: [...students.courses, "Physics"] }
    : students;

  return runUpdate;
});

console.log(duplicatedArr);

// Delete
const deleteArtFromDavid = duplicatedArr.map((props) => {
  const check = props.name === "David";
  const final = check ? { ...props, courses: [...props.courses.pop()] } : props;

  return final;
});

console.log(duplicatedArr);
// const students = [
//   {
//     name: "Alice",
//     age: 22,
//     scores: { math: 85, english: 92, science: 88 },
//     courses: ["Math", "English", "Science"],
//   },
//   {
//     name: "Bob",
//     age: 24,
//     scores: { math: 78, english: 85, science: 90 },
//     courses: ["Math", "History", "Science"],
//   },
//   {
//     name: "Charlie",
//     age: 23,
//     scores: { math: 92, english: 88, science: 95 },
//     courses: ["Math", "English", "Art"],
//   },
//   {
//     name: "David",
//     age: 25,
//     scores: { math: 95, english: 82, science: 80 },
//     courses: ["Math", "English", "Science", "Art"],
//   },
// ];
// // To Create new Duplicated Copys
// const duplicatedArr = [...students];
// // console.log(duplicatedArr);

// // To Merge scores
// const combinedScores = {
//   ...students[0].scores,
//   ...students[1].scores,
// };
// console.log(combinedScores);

// console.log(
//   `${students[0].name} And ${students[1].name}  has this combined score ${combinedScores}`
// );

// // To Add to the Array
// const newStudent = {
//   name: "Eve",
//   age: 21,
//   scores: { math: 88, english: 91, science: 85 },
//   courses: ["Math", "English", "Physics"],
// };

// const updatedStudents = [...students, newStudent];
// console.log(updatedStudents);

// // To Edit or Update
// const editedStudent = students.map((student) => {
//   const updateStudent = student.name === "Charlie";
//   const update = updateStudent
//     ? { ...student, courses: [...student.courses, "Physics"] }
//     : student;

//   return update;
// });

// // To delete
// const deleteCourse = students.map((student) => {
//   const getcharlie = student.name === "Charlie";
//   const deleteCoursed = getcharlie
//     ? { ...student, courses: [...student.courses.shift()] }
//     : student;

//   return deleteCoursed;
// });

// console.log(deleteCourse);

