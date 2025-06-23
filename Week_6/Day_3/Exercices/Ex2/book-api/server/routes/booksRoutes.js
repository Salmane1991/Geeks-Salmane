const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/booksController");

router.get("/books", ctrl.getBooks);
router.get("/books/:bookId", ctrl.getBook);
router.post("/books", ctrl.create);
router.put("/books/:bookId", ctrl.update);
router.delete("/books/:bookId", ctrl.remove);

module.exports = router;
