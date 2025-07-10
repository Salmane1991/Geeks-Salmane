import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"

export default function AddTodo() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text))
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-1 flex-1"
        placeholder="Add new task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1">
        Add
      </button>
    </form>
  )
}