import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li className="flex items-center mb-2 p-2 border-b">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id, todo.completed)}
        className="mr-2"
      />
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)} className="ml-2 text-red-500 hover:text-red-700">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;