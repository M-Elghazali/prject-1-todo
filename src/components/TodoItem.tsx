import React from 'react'

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete , onToggleComplete }) => {
  return (
    <li className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow">
      <span 
        className={`cursor-pointer text-lg text-gray-800 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
        onClick={() => onToggleComplete(todo.id)} // <-- 4. شغل الدالة
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem