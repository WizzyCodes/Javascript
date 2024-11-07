// 1

let outsideTemperature = 36;

if (outsideTemperature < 36) {
  console.log("Its Pretty cold today o");
} else {
  console.log("Today Hot diee");
}

// 2
let isRaining = "Mije";

if (isRaining == "Mije") {
  console.log("Rain dey fall oh");
} else {
  console.log("Its not raining currently");
}

// 3
let age = 12;

if (age >= 20) {
  console.log("You are Officially An Adult");
} else if (age < 20 && age >= 15) {
  console.log("You are a Teenager");
} else if (age < 15 && age >= 10) {
  console.log("You are still in Puberty");
} else if (age < 10) {
  console.log("You are a Toddler");
} else {
  console.log("You are currently Dead");
}

// 4
const companyEmail = "kenny@codelab.com";
const password = "Hello12345";
const userName = companyEmail.slice(0, companyEmail.indexOf("@"));

if (companyEmail && password) {
  if (companyEmail === "kenny@codelab.com") {
    if (password === "Hello12345") {
      if (companyEmail === "kenny@codelab.com" && password === "Hello12345") {
        console.log(`Welcome to Your dashboard ${userName}`);
      } else {
        console.log("Your Details are incorrect");
      }
    } else {
      console.log("Incorrect Password");
    }
  } else {
    console.log("Incorrect Email");
  }
} else {
  console.log("Error, There is no email or password");
}
