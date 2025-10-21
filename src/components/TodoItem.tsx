import React from 'react'

export interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li className="flex items-center justify-between rounded-lg bg-gray-100 p-4 shadow">
      <span className="text-lg text-gray-800">{todo.text}</span>
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