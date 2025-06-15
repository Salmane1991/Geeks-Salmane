let books = [];

const getAllBooks = (req, res) => {
  res.json(books);
};

const addBook = (req, res) => {
  const book = req.body;
  books.push(book);
  res.send("Book added");
};

const updateBookById = (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  books = books.map((book) => (book.id === id ? updatedBook : book));
  res.send("Book updated");
};

const deleteBookById = (req, res) => {
  const { id } = req.params;
  books = books.filter((book) => book.id !== id);
  res.send("Book deleted");
};

module.exports = {
  getAllBooks,
  addBook,
  updateBookById,
  deleteBookById,
};
