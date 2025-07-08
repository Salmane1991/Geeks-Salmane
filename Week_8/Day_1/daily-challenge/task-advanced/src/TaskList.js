import { useContext, useState, useRef } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, dispatch } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <div style={{ marginBottom: "12px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              gap: "8px",
              padding: "8px",
              alignItems: "center",
            }}
          >
            {editingId === task.id ? (
              <>
                <input ref={inputRef} defaultValue={task.text} />
                <button
                  onClick={() => {
                    dispatch({
                      type: "EDIT_TASK",
                      payload: {
                        id: task.id,
                        text: inputRef.current.value,
                      },
                    });
                    setEditingId(null);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <span
                onClick={() => {
                  setEditingId(task.id);
                  setTimeout(() => {
                    inputRef.current?.focus();
                  }, 0);
                }}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {task.text}
              </span>
            )}

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
    </>
  );
}

export default TaskList;
