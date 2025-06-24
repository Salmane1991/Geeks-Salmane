const express = require("express");
const router = express.Router();
const {
  allTasks,
  newTask,
  getTaskByID,
  updateTaskById,
  removeTaskById,
} = require("../controllers/taskController");

router.get("/tasks", allTasks);
router.post("/tasks", newTask);
router.get("/tasks/:id", getTaskByID);
router.put("/tasks/:id", updateTaskById);
router.delete("/tasks/:id", removeTaskById);

module.exports = router;
