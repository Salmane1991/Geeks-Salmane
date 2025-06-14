const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

let books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
  { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
  },
];

app.get("/", (req, res) => {
  let html = "<h1>Books</h1>";
  books.forEach((book) => {
    html += `<h3>${book.title} (${book.publishedYear})</h3><p>by ${book.author}</p><hr>`;
  });

  html += `
    <h2>Add New Book</h2>
    <form method="POST" action="/api/books">
      <input name="title" placeholder="Title" /><br />
      <input name="author" placeholder="Author" /><br />
      <input name="publishedYear" placeholder="Year" /><br />
      <button type="submit">Add Book</button>
    </form>
  `;

  res.send(html);
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear: parseInt(publishedYear),
  };
  books.push(newBook);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
