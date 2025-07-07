import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.text}
          <button
            onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
          >
            Done
          </button>
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: task.id })}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
