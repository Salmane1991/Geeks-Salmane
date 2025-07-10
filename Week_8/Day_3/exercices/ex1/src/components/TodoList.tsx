import { useSelector } from "react-redux"
import { RootStateOrAny } from "react-redux"
import TodoItem from "./TodoItem"

export default function TodoList() {
  const todos = useSelector((state: RootStateOrAny) => state.todos.list)

  return (
    <ul className="space-y-2">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}