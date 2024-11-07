const students = [
  {
    studentName: "Alice",
    studentHasSubmitted: true,
    submittedSubject: "Math",
    studentMembership: "gold",
  },
];

//1
if (students) {
  console.log("Welcome to Students Array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No students array exists");
}
//............
students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");
//.........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

//............
const variable = students.map((student) => {
  return student;
});

function firstFunction(name) {
  return `Welcome ${name}`;
}

const secFunction = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction("Amaka"));
console.log(secFunction("Mije"));

//2
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("NO student array exist");
}

//...........
students
  ? console.log("Welcome to students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

//...........
const variable2 = students.some((el) => {
  return el;
});

function firstFunction2(name) {
  return `Welcome ${name}`;
}

const secFunction2 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction2("amaka"));
console.log(secFunction2("Mije"));

//3
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No students arrray exists");
}

//.......
students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

//.............
const variable3 = students.fill((props) => {
  return props;
});

function firstFunction3(name) {
  return `Welcome ${name}`;
}

const secFunction3 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction3("Wisdom"));
console.log(secFunction3("Mercy"));

//4
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No students array exists");
}

//............
students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//......
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

//...........
const variable4 = students.forEach((el) => {
  return el;
});

function firstFunction4(name) {
  return `Welcome ${name}`;
}

const secFunction4 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction4("Sixtus"));
console.log(secFunction4("Daniel"));

//5
if (students) {
  console.log("Welcome to the students arrray");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("NO students array exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in student array");

//.........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable5 = students.flat((props) => {
  return props;
});

function firstFunction5(name) {
  return `Welcome ${name}`;
}

const secFunction5 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction5("Emma"));
console.log(secFunction5("Ecllipse"));

//6
if (students) {
  console.log(`Welcome to students array`);
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No students array exists");
}

students
  ? console.log("welcome to students array")
  : console.log("You are not in students array");

//.........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable6 = students.values((el) => {
  return el;
});

function firstFunction6(name) {
  return `Welcome ${name}`;
}

const secFunction6 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction6("Amaka"));
console.log(secFunction6("mije"));

//7
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable7 = students.flatMap((el) => {
  return el;
});

function firstFunction7(name) {
  return `Welcome ${name}`;
}

const secFunction7 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction7("amaka"));
console.log(secFunction7("mije"));

//8
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable8 = students.flatMap((el) => {
  return el;
});

function firstFunction8(name) {
  return `Welcome ${name}`;
}

const secFunction8 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction8("amaka"));
console.log(secFunction8("Mije"));

//9
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable9 = students.flatMap((el) => {
  return el;
});

function firstFunction9(name) {
  return `Welcome ${name}`;
}

const secFunction9 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction9("amaka"));
console.log(secFunction9("mije"));

//10
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable10 = students.flatMap((el) => {
  return el;
});

function firstFunction10(name) {
  return `Welcome ${name}`;
}

const secFunction10 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction10("amaka"));
console.log(secFunction7("mije"));

//11
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable11 = students.flatMap((el) => {
  return el;
});

function firstFunction11(name) {
  return `Welcome ${name}`;
}

const secFunction11 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction11("ame"));
console.log(secFunction11("amena"));

//12
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable12 = students.flatMap((el) => {
  return el;
});

function firstFunction12(name) {
  return `Welcome ${name}`;
}

const secFunction12 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction12("ahmed"));
console.log(secFunction12("habeeb"));

//13
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable13 = students.flatMap((el) => {
  return el;
});

function firstFunction13(name) {
  return `Welcome ${name}`;
}

const secFunction13 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction13("amala"));
console.log(secFunction13("amidat"));

//14
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable14 = students.flatMap((el) => {
  return el;
});

function firstFunction14(name) {
  return `Welcome ${name}`;
}

const secFunction14 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction14("makin"));
console.log(secFunction14("made"));

//15
if (students) {
  console.log("Welcome to students array");
} else if (!students) {
  console.log("You are not in students array");
} else {
  console.log("No student sarray exists");
}

students
  ? console.log("Welcome to students array")
  : console.log("You are not in students array");

//.....................
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable15 = students.flatMap((el) => {
  return el;
});

function firstFunction15(name) {
  return `Welcome ${name}`;
}

const secFunction15 = (name) => {
  return `Welcome ${name}`;
};

console.log(firstFunction15("amara"));
console.log(secFunction15("gift"));

//16
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in the students array");
} else {
  console.log("No students array");
}

students
  ? console.log("Welcome to the students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable16 = students.includes((el) => {
  return el;
});

function firstFunction16(name) {
  return `Welcome ${name}`;
}

const secFunction16 = (name) => {
  return `Welcome ${name}`;
};

console.log(secFunction16("amaka"));
console.log(firstFunction16("merlin"));

//17
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in the students array");
} else {
  console.log("No students array");
}

students
  ? console.log("Welcome to the students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable17 = students.includes((el) => {
  return el;
});

function firstFunction17(name) {
  return `Welcome ${name}`;
}

const secFunction17 = (name) => {
  return `Welcome ${name}`;
};

console.log(secFunction17("amaka"));
console.log(firstFunction17("merlin"));

//18
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in the students array");
} else {
  console.log("No students array");
}

students
  ? console.log("Welcome to the students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable18 = students.includes((el) => {
  return el;
});

function firstFunction18(name) {
  return `Welcome ${name}`;
}

const secFunction18 = (name) => {
  return `Welcome ${name}`;
};

console.log(secFunction18("amaka"));
console.log(firstFunction18("merlin"));

//19
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in the students array");
} else {
  console.log("No students array");
}

students
  ? console.log("Welcome to the students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable19 = students.includes((el) => {
  return el;
});

function firstFunction19(name) {
  return `Welcome ${name}`;
}

const secFunction19 = (name) => {
  return `Welcome ${name}`;
};

console.log(secFunction19("amaka"));
console.log(firstFunction19("merlin"));

//20
if (students) {
  console.log("Welcome to the students array");
} else if (!students) {
  console.log("You are not in the students array");
} else {
  console.log("No students array");
}

students
  ? console.log("Welcome to the students array")
  : console.log("You are not in the students array");

//...........
for (let i = 0; i < students.length; i++) {
  const element = array[i];
  console.log(element);
}

const variable20 = students.includes((el) => {
  return el;
});

function firstFunction20(name) {
  return `Welcome ${name}`;
}

const secFunction20 = (name) => {
  return `Welcome ${name}`;
};

console.log(secFunction20("amaka"));
console.log(firstFunction20("merlin"));
