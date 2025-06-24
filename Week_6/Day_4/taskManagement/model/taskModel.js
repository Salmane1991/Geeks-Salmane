const fs = require("node:fs");

async function getAllTasks() {
  const data = await fs.promises.readFile("./model/tasks.json", "utf8");
  const array = JSON.parse(data);
  return array;
}

async function addNewTask(newTask) {
  const data = await fs.promises.readFile("./model/tasks.json", "utf8");
  const array = JSON.parse(data);
  array.push(newTask);
  await fs.promises.writeFile("./model/tasks.json", JSON.stringify(array));
  return newTask;
}

async function updateTasks(newData) {
  await fs.promises.writeFile("./model/tasks.json", JSON.stringify(newData));
  return newData;
}

module.exports = { getAllTasks, addNewTask, updateTasks };
