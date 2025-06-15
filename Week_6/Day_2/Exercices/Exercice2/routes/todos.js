const express = require("express");
const router = express.Router();
const {
  getAll,
  addNew,
  updateItemById,
  deleteItemById,
} = require("../controllers/todo");

router.get("/todos", getAll);
router.post("/todos", addNew);
router.put("/todos/:id", updateItemById);
router.delete("/todos/:id", deleteItemById);

module.exports = router;
