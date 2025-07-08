import { useState } from "react";
import { TaskProvider } from "./TaskContext";
import TaskList from "./TaskList";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text,
        completed: false,
      },
    });

    setText("");
  }

  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <h1>Task Manager Advanced</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
