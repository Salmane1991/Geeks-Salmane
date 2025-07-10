import { useDispatch } from "react-redux"
import { toggleTodo, removeTodo } from "../features/todoSlice"

export default function TodoItem({ todo }: { todo: any }) {
  const dispatch = useDispatch()

  return (
    <li className="flex justify-between items-center bg-white p-2 border">
      <span
        className={todo.completed ? "line-through" : ""}
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-red-500"
      >
        Delete
      </button>
    </li>
  )
}