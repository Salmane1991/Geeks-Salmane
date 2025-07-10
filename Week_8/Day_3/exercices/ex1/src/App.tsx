import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}