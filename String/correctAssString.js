// 1
const sentence = "The quick brown fox jumps over the lazy dog";
const slicedUppercaseWord = sentence.slice(10, 15).toUpperCase();
const modifiedSentence = sentence.replace("dog", slicedUppercaseWord);
const finalAnswer = modifiedSentence.replace("lazy", "");
console.log("1. ", finalAnswer);

// 2
const email = "Student.Name@SchoolDomain.com";
const extractedDomain = email.slice(13, 29).toLowerCase();
const at = email.slice(12, 13);
const username = email.slice(0, 12).toUpperCase();
const finalEmail = username.concat(at).concat(extractedDomain);
console.log("2. ", finalEmail);

// 3
const messyString = " Too many spaces here. ";
const trimmed = messyString.trim();
const lengthStr = trimmed.length;
const subStr = trimmed.substring(5, lengthStr - 5);
console.log("3. ", subStr);

// 4
const phrase = "I like to code in JavaScript. JavaScript is fun!";
const firstReplace = phrase.replace("JavaScript", "JS");
const secondReplace = firstReplace.replaceAll("JavaScript", "JS").toUpperCase();
const question4Answer = secondReplace.substring(10, 30);
console.log("4. ", question4Answer);

// 5
const text = "Programming is highly rewarding";
const tenthPos = text.slice(10, 11);
const tenthPosUnicode = tenthPos.charCodeAt();
const replaceAllG = text.replaceAll("g", "103");
const ques5Answer = replaceAllG.slice(8, 28);
console.log("5. ", ques5Answer);

// 6
const firstName = "Jane ";
const middleName = "Marie ";
const lastName = "Smith ";
const concatStr = firstName.concat(middleName).concat(lastName);
const mIndex = concatStr.indexOf("M");
const quest6Answer = concatStr.replace("Marie", "Ann").toUpperCase();
console.log("6. ", quest6Answer);

// 7
const statement = "JavaScript is a versatile and popular programming language";
const checkStart = statement.startsWith("JavaScript");
const checkEnd = statement.endsWith("language");
const replaceStatement = statement.replace("versatile", "powerful");
const question7Ans = replaceStatement.toLowerCase();
console.log("7. ", question7Ans, checkStart, checkEnd);

// 8
const description =
  "Backend development involves working with databases, servers, and APIs";
const extract = description.substring(42, 70).toLowerCase();
const splitArr = extract.split(",");
const finalAns8 = splitArr.join(" & ");
console.log("8. ", finalAns8);

// 9
const announcement = "Join the new online coding bootcamp now";
const splitedAnnounce = announcement.split(" ");
const frstWrd = "Join".length;
const secWrd = "the".length;
const trdWrd = "new".length;
const fourthWrd = "online".length;
const fifthWrd = "coding".length;
const sixthWrd = "bootcamp".length;
const seventhWrd = "now".length;
console.log(
  "9. ",
  frstWrd,
  secWrd,
  trdWrd,
  fourthWrd,
  fifthWrd,
  sixthWrd,
  seventhWrd,
  announcement.indexOf("t")
);

// 10
const feedback =
  "This course is simply amazing. This course is simply comprehensive.";
const newReplaced = feedback.replace("course", "program").toUpperCase();
const sliced = newReplaced.slice(5, 55);
const splitedFinal = sliced.split(" ");
console.log("10. ", splitedFinal);
