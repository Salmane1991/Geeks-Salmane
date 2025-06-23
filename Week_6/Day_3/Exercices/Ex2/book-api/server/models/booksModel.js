const db = require("../config/db");

async function getAllBooks() {
  const result = await db.query("SELECT * FROM books");
  return result.rows;
}

async function getBookById(id) {
  const result = await db.query("SELECT * FROM books WHERE id = $1", [id]);
  return result.rows[0];
}

async function createBook(title, author, year) {
  const result = await db.query(
    "INSERT INTO books (title, author, publishedyear) VALUES ($1, $2, $3) RETURNING *",
    [title, author, year]
  );
  return result.rows[0];
}

async function updateBook(id, title, author, year) {
  const result = await db.query(
    "UPDATE books SET title = $1, author = $2, publishedyear = $3 WHERE id = $4 RETURNING *",
    [title, author, year, id]
  );
  return result.rows[0];
}

async function deleteBook(id) {
  await db.query("DELETE FROM books WHERE id = $1", [id]);
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
