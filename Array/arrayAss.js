const books = [
    "1984",
    "To kill a mockingbird",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the eye",
];

//1
console.log(books.join().slice(0,64)+"War and Peace");
//2
console.log(books.shift());
console.log(books.unshift("1984"));
console.log(books.push("Pride and Prejudice"));
console.log(books.shift());
console.log(books.unshift("1984"));
//3
console.log(books.unshift("Pride and Prejudice"));
console.log(books.unshift("War and Peace"));
console.log(books.shift());
console.log(books.unshift("War and Peace"));
//4
console.log(books.push("War and Peace"));
console.log(books.shift());
console.log(books.join());
//5
console.log(books.pop());
console.log(books.push("War and Peace"));
console.log(books.unshift("Pride and Prejudice"));
console.log(books.push("War and Peace"));


const library = [
    {
        section: "Fiction",
        books: ["1984", "Brave New World", "Fahrenhit  451"],
    },
    {
        section: "Non-Fiction",
        books: ["Sapiens", "Educated", "The Immortal Life Of Henrietta Lacks"],
    },
    {
        section: "Science",
        books: ["A Brief History Of Time", "The Selfish Gene", "Cosmos"],
    },
];

// Question 1
console.log(library[0].books[1]);
console.log(library[2].books.push("The Man That Knew Infinity"));
console.log(library[0].books.concat(library[2].books));

// Question 2
library[1].books.pop();
library[1].books.unshift("Silent Spring"); 
console.log(combined = library[1].books.concat(library[0].books));

// Question 3
library[0].books.push("To Kill a Mockingbird");
library[2].books.shift();
console.log(library[0].books.concat(library[2].books));

// Question 4
console.log(library[2].books.splice(library[2].books.indexOf("Cosmos"), 1)); 
console.log(library[2].books.unshift("The Gene"));
console.log(library[2].books.concat(library[1].books))
// Question 5
library[0].books.push("The Great Gatsby");
library[1].books.splice(library[1].books.indexOf("Sapiens"), 1);
console.log(library[0].books.concat(library[1].books));