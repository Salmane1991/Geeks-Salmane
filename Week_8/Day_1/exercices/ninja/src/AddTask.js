import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

function AddTask() {
  const { dispatch } = useContext(TaskContext);
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim()) {
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
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default AddTask;
