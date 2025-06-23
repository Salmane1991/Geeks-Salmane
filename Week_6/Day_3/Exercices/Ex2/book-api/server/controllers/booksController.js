const model = require("../models/booksModel");

async function getBooks(req, res) {
  const books = await model.getAllBooks();
  res.json(books);
}

async function getBook(req, res) {
  const book = await model.getBookById(req.params.bookId);
  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found" });
}

async function create(req, res) {
  const { title, author, publishedyear } = req.body;
  const newBook = await model.createBook(title, author, publishedyear);
  res.status(201).json(newBook);
}

async function update(req, res) {
  const { title, author, publishedyear } = req.body;
  const updated = await model.updateBook(
    req.params.bookId,
    title,
    author,
    publishedyear
  );
  if (updated) res.json(updated);
  else res.status(404).json({ message: "Book not found" });
}

async function remove(req, res) {
  await model.deleteBook(req.params.bookId);
  res.json({ message: "Book deleted" });
}

module.exports = { getBooks, getBook, create, update, remove };
