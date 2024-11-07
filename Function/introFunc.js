function sayHiToAmaka() {
  console.log("Welcome Amaka");
}

const sayHiToMercy = () => {
  console.log("Welcome Mercy");
};

// With Arguments

function welcomeUser(name) {
  return `Welcome to my apartment ${name}`;
}

const statement = (name, gender, age) => {
  return `My name is ${name} i am ${age} years old and my gender is ${gender}`;
};

sayHiToAmaka();
sayHiToMercy();
console.log(welcomeUser("mije"));
console.log(statement("Praise", "Male", 24));
console.log(statement("Mercy", "Female", 22));

// 1

function hello() {
  return `Hiii`;
}

const hello2 = () => {
  return `Hiiii`;
};
