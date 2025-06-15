const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/books");

router.get("/books", getAllBooks);
router.post("/books", addBook);
router.put("/books/:id", updateBookById);
router.delete("/books/:id", deleteBookById);

module.exports = router;
