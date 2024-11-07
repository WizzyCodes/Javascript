const students = [
  {
    studentName: "Alice",
    studentHasSubmitted: true,
    submittedSubject: "Math",
    studentMembership: "gold",
  },
  {
    studentName: "Bob",
    studentHasSubmitted: false,
    submittedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Charlie",
    studentHasSubmitted: true,
    submittedSubject: "Science",
    studentMembership: "platinum",
  },
  {
    studentName: "David",
    studentHasSubmitted: false,
    submittedSubject: "History",
    studentMembership: "none",
  },
  {
    studentName: "Eve",
    studentHasSubmitted: true,
    submittedSubject: "Math",
    studentMembership: "bronze",
  },
  {
    studentName: "Frank",
    studentHasSubmitted: true,
    submittedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Grace",
    studentHasSubmitted: false,
    submittedSubject: "Science",
    studentMembership: "gold",
  },
  {
    studentName: "Heidi",
    studentHasSubmitted: true,
    submittedSubject: "History",
    studentMembership: "gold",
  },
  {
    studentName: "Ivan",
    studentHasSubmitted: false,
    submittedSubject: "Math",
    studentMembership: "bronze",
  },
  {
    studentName: "Judy",
    studentHasSubmitted: true,
    submittedSubject: "Science",
    studentMembership: "platinum",
  },
];

//1
const studentsCopy = [...students];
console.log("1.", studentsCopy);

//2
if (studentsCopy[0].studentHasSubmitted) {
  console.log(
    "2.",
    `It is ${studentsCopy[0].studentHasSubmitted} that Alice has submitted her assignment`
  );
} else {
  console.log(
    "Alice is going to be punished because she did no submit her assignment"
  );
}

//3
if (
  studentsCopy[1].studentMembership === "gold" ||
  studentsCopy[1].studentMembership === "Platinum"
) {
  console.log(`${studentsCopy[1].studentName} has priority grading`);
} else {
  console.log("3.", `${studentsCopy[1].studentName} has standard grading`);
}

//4
if (studentsCopy[2].submittedSubject === "Math") {
  console.log(`${studentsCopy[2].studentName} is a Math Genius`);
} else if (studentsCopy[2].submittedSubject === "Science") {
  console.log("4.", `${studentsCopy[2].studentName} is a Science Star`);
} else {
  console.log(`${studentsCopy[2].studentName}, Keep Up the Good Work`);
}

//5
if (!studentsCopy[3].studentHasSubmitted) {
  console.log(
    "5.",
    ` David membership (${studentsCopy[3].studentMembership}) is reduced by one tier`
  );
} else {
  console.log(`David has no penalty`);
}

//6
if (
  studentsCopy[4].submittedSubject === "Math" &&
  (studentsCopy[4].studentMembership === "gold" ||
    studentsCopy[4].studentMembership === "patinum")
) {
  console.log(`${studentsCopy[4].studentName} gets an extra credit`);
} else {
  console.log("6.", `No extra credit for ${studentsCopy[4].studentName}`);
}

//7
if (
  studentsCopy[5].submittedSubject === "Science" &&
  (studentsCopy[5].studentMembership === "silver" ||
    studentsCopy[5].studentMembership === "gold" ||
    studentsCopy[5].studentMembership === "platinum")
) {
  console.log(
    `${studentsCopy[5].studentName} is eligible for the science fair`
  );
} else {
  console.log(
    " 7.",
    `${studentsCopy[5].studentName} is not eligible for the science fair`
  );
}

//8
if (studentsCopy[6].studentHasSubmitted) {
  console.log(`${studentsCopy[6].studentName} earns a gold badge`);
} else {
  console.log("8.", `${studentsCopy[6].studentName} does earn a badge`);
}

//9
if (
  (studentsCopy[7].submittedSubject === "History" &&
    studentsCopy[7].studentMembership === "gold") ||
  studentsCopy[7].studentMembership === "platinum"
) {
  console.log("9.", `${studentsCopy[7].studentName} gets a detailed feedback`);
}

//10
if (
  studentsCopy[8].studentMembership === "bronze" &&
  studentsCopy[8].studentHasSubmitted
) {
  console.log(
    `${
      studentsCopy[8].studentName
    } gets a ${(studentsCopy[8].studentMembership =
      "silver")} membership upgrade to silver`
  );
} else {
  console.log(
    "10.",
    `${studentsCopy[8].studentName} does not get a membership upgrade`
  );
}

if (
  (studentsCopy[9].submittedSubject === "Science" ||
    studentsCopy[9].submittedSubject === "Math") &&
  (studentsCopy[9].studentMembership === "silver" ||
    studentsCopy[9].studentMembership === "gold" ||
    studentsCopy[9].studentMembership === "platinum")
) {
  console.log(
    "11.",
    `${studentsCopy[9].studentName} earns a STEM Excellence certificate`
  );
}
