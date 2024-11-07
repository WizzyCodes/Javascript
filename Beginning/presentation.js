const libraryApi = {
    books: [
        {
            title: "To Kill a Mockingbird",
            author: {
                name: "Harper Lee",
                nationality: "American",
            },
            genre: ["Fiction", "Classic"],
            reviews: [
                {
                    reviewer: "John Doe",
                    rating: 5,
                    comment: "A timeless classic.",
                },
                {
                    reviewer: "Jane Smith",
                    rating: 4,
                    comment: "Great read.",
                },
            ],
        },
        {
            title: "1984",
            author: {
                name: "Geoge Orwell",
                nationality: "Britih",
            },
            genre: ["Fiction","Dystopian"],
            reviews: [
                {
                    reviewer: "Alice Brown",
                    rating: 5,
                    comment: "Impactful",
                },
            ],
        },
    ],
};


console.log(libraryApi.books[0].title.toUpperCase().slice(0,10));

console.log(libraryApi.books[1].author.name.toLowerCase().replace(" ", "&"));

console.log(libraryApi.books[0].author.nationality.replace("American","us").toUpperCase().padEnd(10,"*"));

console.log(libraryApi.books[1].reviews[0].comment.includes("Impactful"));
console.log(libraryApi.books[1].reviews[0].comment.charAt(0));

console.log(libraryApi.books[1].title.substring(0,4).toUpperCase().concat("- A Dystopian Novel"));

console.log(libraryApi.books[0].reviews[1].reviewer.toUpperCase().slice(6,11).concat("REV"));

console.log(libraryApi.books[1].title.repeat(3).replaceAll("1984","Nineteen EIighty-Four").slice(0,41));
