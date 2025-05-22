let allBooks = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg",
        alreadyRead: true
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

let section = document.querySelector(".listBooks");

for (let book of allBooks) {
    let bookDiv = document.createElement("div");

    let bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    let bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);
    section.appendChild(bookDiv);
}
