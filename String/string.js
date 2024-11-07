let a = "Man";
let b = "Boy";
let c = "Girl";
let d = "Woman";
let x = "ball";

x = "Fish";
let e = a.toLowerCase();
console.log(e.toUpperCase());

//The boy:b just got a new BALL:x
//let res = "the " + b + " " + "just got a new " + x;

//let res = The ${b.toLowerCase()} just got a new ${x.toUpperCase()};

let xx = "${b.toLowerCase()}";
//console.log(res);

//a.string(b,)
let sense = "This is the day!";
let sense1 = sense.charAt(2);

let name = "peter";

let result = name.charAt(0).toUpperCase();

console.log(result);

let firstName = "peter";
let lastName = "oti";

let resFN = firstName.charAt(0);
let resLN = lastName.charAt(0); 

console.log(resFN.concat(resLN).toUpperCase());
console.log(resFN + resLN);

console.log(firstName.charCodeAt(0));
console.log(firstName.charAt(0));

console.log();
let value = "This is it";
console.log(value.indexOf("i"));
console.log(value.includes("i"));

//'this' is peter // P
let r = "This is peter's isla";
console.log();
console.log(r.charAt(r.indexOf("p")).toUpperCase());

console.log();
console.log(r.lastIndexOf("i"));

console.log();
console.log(r.length);

console.log();
console.log("read: ", r.indexOf("a"));

console.log();
console.log(r.charAt(r.length - 1));

let word = "Isreal";
console.log();
console.log();
console.log(word.length);
console.log(word.indexOf("I"));
console.log(word.charAt(word.length - 1));

ChannelMergerNode