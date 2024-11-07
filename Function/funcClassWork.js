function welcomeStaff() {
  return "Welcome to Codelab set10 Javascript class Joel";
}

function welcomeStaff2(name) {
  return `Welcome to Codelab set10 Javascript class ${name}`;
}

const welcomeStudent = () => {
  return "Welcome to Codelab set10 Javascript class Joel";
};

const welcomeStudent2 = (name) => {
  return `Welcome to Codelab set10 Javascript class ${name}`;
};

console.log(welcomeStaff());
console.log();
console.log();

console.log(welcomeStaff2("Wisdom"));
console.log(welcomeStaff2("Mercy"));
console.log(welcomeStaff2("Amaka"));
console.log(welcomeStaff2("Mije"));

console.log(welcomeStudent());
console.log(welcomeStudent2("Amaka"));
console.log(welcomeStudent2("Austin"));

const introduction = (name, age, gender, state, height) => {
  const namee = name;
  const agee = age;
  const genderr = gender;
  const statee = state;
  const heightt = height;

  return `My name is ${namee} i am ${agee} years old, my height is ${heightt} , i am from ${statee} state, I am a ${genderr} `;
};

console.log(introduction("mije", "28", "6ft2", "jigawa", "male"));

const aboutAmaka = (name) => {
  return `My name is ${name} and i'm short😊👍`;
};

console.log(aboutAmaka("Amaka"));

const day = (name) => {
  return `This is ${name} day, im am happy`;
};
console.log(day("mije"));

// console.clear();

// Write a function that returns the total sum of the numbers

// Write a function that checks for the highest number in the array

// Write a function that checks for the smallest number i the array

let arrOfNum = [223, 32, 42, 46, 76, 64, 35, 93, 52, 73, 53, 45];

let arry = [1, 2, 3, 4, 5];

const getTotal = (container) => {
  const total = container.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  });

  return total;
};

const getHighest = (container) => {
  const high = Math.max(...container);
  return high;
};

const getLowest = (container) => {
  const low = Math.min(...container);
  return low;
};
// Total
console.log(getTotal(arrOfNum));
console.log(getTotal(arry));
console.log();

// highest
console.log(getHighest(arrOfNum));
console.log(getHighest(arry));
console.log();

// lowest
console.log(getLowest(arrOfNum));
console.log(getLowest(arry));
