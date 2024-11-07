//1. Extract, Transform, and Reconstruct
const sentence = "The quick brown fox jumps over the lazy dog";
const word = sentence.split(" ")[3].toUpperCase();
const newSentence = sentence.replace("lazy", "").replace("dog", word);
console.log(newSentence);

//2. Domain and username extraction
const email = "Student.wisdom@SchoolDomain.com";
const username = "student.Wisdom@";
console.log(email.slice(21, 27).toLowerCase());
console.log(email.slice(8, 14).toLowerCase());
console.log(username.toUpperCase().concat(email.slice(21, 27)));

//3.Clean,Count,and Extract
const messyString = "Too many spaces here.";
const trimmedString = messyString.trim();
const length = trimmedString.length;
const result = trimmedString.slice(5, length - 5);
console.log(result);

//4. Complex word replacement
const phrase = "I like to code in Javascript.Javascript is fun!";
const newPhrase = phrase
  .replace("Javascript", "JS")
  .replace(/Javascript/g, "JS")
  .toUpperCase();
const sub = newPhrase.slice(10, 30);
console.log(sub);

//5.Character manipulation
const text = "Programming is highly rewarding";
const char = text.charAt(10);
const unicode = char.charCodeAt(0);
const newText = text.replace(/g/g, String.fromCharCode(unicode));
const slicedText = newText.slice(8, 28);
console.log(slicedText);

//6.Complex string joining
const firstName = "Jane";
const middleName = "Marie";
const lastName = "Smith";
console.log(firstName.concat(middleName).concat(lastName).toUpperCase());
console.log(middleName.indexOf("M"));
console.log(middleName.replace("Marie", "Ann"));

//7.Sentence start and end analysis
const statement = "Javascript is a versatile and popular programming language";
console.log(statement.startsWith("Javascript"));
console.log(statement.endsWith("language"));
console.log(statement.replace("versatile", "powerful").toLowerCase());

//8. Substring Manipulation
const description =
  "Backend development involves working with databases, servers, and APIs";
const substring = description.slice(41, 74).toLowerCase();
const arra = substring.split(",");
const joinedArray = arra.join(" & ");
console.log(joinedArray);

//9. Word Split and Count
const announcement = "Join the new online coding bootcamp now";
const words = announcement.split(" ");
const lengths = words.map((word) => word.length);
const joinedLengths = lengths.join(",");
const index = joinedLengths.indexOf("5");
console.log(index);
console.log(joinedLengths);
console.log(words);

//10. Substring Replacement and Case Change
const feedback =
  "This course is simply amazing. This course is simply comprehensive.";
const newFeedback = feedback.replace(/course/g, "program").toUpperCase();
const slicedFeedback = newFeedback.slice(5, 55);
const array = slicedFeedback.split(" ");
console.log(newFeedback);
console.log(slicedFeedback);
console.log(array);
