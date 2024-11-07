//PLAIN STRING METHODS

// 1. length
const paragraph = "I am a boy learning javascript";
console.log(paragraph.length);

// 2 . toLowerCase
const personalEmail = "WISDOMIBERI832@GMIAL.COM";
console.log(personalEmail.toLowerCase());

// 3 . toUpperCase
const companyEmail = "wisdomiberi832@gmail.com";
console.log(companyEmail.toUpperCase());

// 4 . trim, trimEnd, trimStart
const text = " Hello and you are welcome to codelab today ";
console.log(text.trim());
console.log(text.trimEnd());
console.log(text.trimStart());

// 5 . valueOf
const textII = "Lets work and achieve great things";
console.log(textII.valueOf());

//ARGUMENT STRING METHODS

// 6 . charAT and charCodeAt
const aboutJavascript =
  "Javascript is a programing language used to build interactive web applications";
console.log(aboutJavascript.charAt());
console.log(aboutJavascript.charCodeAt());

// 7 . concat
const aboutJS = " It is also the engine of your web application";
console.log(aboutJavascript.concat(aboutJS));
const firstName = "wisdom";
const lastName = "iberi";
const at = "@";
const company = "codelabOrganization";
const domain = ".com";
console.log(
  firstName.concat(lastName).concat(at).concat(company).concat(domain)
);

// 8 . split
const valuedGuests =
  "Daniel and chioma are estemmed guests for the charity event";
const todaysDate = "20-07-2024";
console.log(todaysDate.split("-"));

// 9 . slice
const eventTime = "The charity event starts at 11:00am prompt";
console.log(eventTime.slice(10, 16));

// 10 . startsWith and endsWith
const agenda = "The charity event is to raise money for rurual communities";
console.log(agenda.startsWith("The"));
console.log(agenda.endsWith("communities"));

// 11 . replace and replaceAll
const simpleEssay =
  "He was held at gun point at the bus-stop. Thank God the police intervened and he was safe. He is now at home";
console.log(simpleEssay.replace("He", "denis"));
console.log(simpleEssay.replaceAll("He", "denis"));

// 12. repeat
const essayII = "she was held at gun point";
console.log(essayII.repeat(1));

// 13 . indexOf and lastIndexOf
const welcome =
  "welcome to the NEXT techonology company, How can we be of service";
console.log(welcome.indexOf("o"));
console.log(welcome.lastIndexOf());

// 14. includes
const set10 = "our admin is fellow daniel";
console.log(set10.includes("daniel"));
