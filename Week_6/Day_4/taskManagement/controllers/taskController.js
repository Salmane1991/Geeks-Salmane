const { finished } = require("stream");
const { getAllTasks, addNewTask, updateTasks } = require("../model/taskModel");

const allTasks = async (req, res) => {
  try {
    const data = await getAllTasks();
    res.json(data);
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

const newTask = async (req, res) => {
  try {
    const task = req.body;
    const sendTask = await addNewTask(task);
    res.json({ Message: "Your task has been added", sendTask });
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

const getTaskByID = async (req, res) => {
  try {
    const data = await getAllTasks();
    const idTask = parseInt(req.params.id);
    for (const task of data) {
      if (task.id === idTask) {
        res.json(task);
      }
    }
    res.status(404).send("Task not found");
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const data = await getAllTasks();
    const idTask = parseInt(req.params.id);
    for (const task of data) {
      if (task.id === idTask) {
        for (const key in task) {
          task[key] = req.body[key];
        }
        updateTasks(data);
        return res.send("Your task has been updated");
      }
    }
    res.status(404).send("Task not found");
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

const removeTaskById = async (req, res) => {
  try {
    const data = await getAllTasks();
    const idTask = parseInt(req.params.id);
    for (const task of data) {
      if (task.id === idTask) {
        const newData = data.filter((tsk) => tsk !== task);
        await updateTasks(newData);
        return res.send("Your task has been removed");
      }
    }
    res.status(404).send("Task not found");
  } catch (err) {
    return res.send("Error Message : " + err);
  }
};

module.exports = {
  allTasks,
  newTask,
  getTaskByID,
  updateTaskById,
  removeTaskById,
};
