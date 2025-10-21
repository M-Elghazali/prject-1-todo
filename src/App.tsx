import { useState } from "react"


function App() {

  const [newTodo, setNewTodo] = useState<string>("")
  const [todos, setTodos] = useState<string[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim() === "") return // لو فاضي، اخرج من الدالة
    setTodos([...todos, newTodo])
    setNewTodo("")
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900 font-sans">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        
        <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
          My To-Do List
        </h1>

        <form className="mb-6 flex" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="flex-grow rounded-l-lg border-2 border-gray-300 p-3 text-lg focus:border-blue-500 focus:outline-none"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-r-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-600"
          >
            Add
          </button>
        </form>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Tasks:</h2>
          <ul className="space-y-3"> 
            {todos.map((todo, index) => (
              <li
                key={index} 
                className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow"
              >
                <span className="text-lg text-gray-800">{todo}</span>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {todos.length === 0 && (
            <p className="text-center text-gray-500">No tasks yet. Add one!</p>
          )}

        </div>

      </div>
    </div>
  )
}

export default App