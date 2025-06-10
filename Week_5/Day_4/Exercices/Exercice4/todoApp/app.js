import { TodoList } from "./todo.js";

const todos = new TodoList();

todos.addTask("Buy milk");
todos.addTask("Study Node.js");
todos.completeTask(0);

console.log(todos.listTasks());
