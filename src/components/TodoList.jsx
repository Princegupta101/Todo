import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <ul className="mt-4">
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} onDelete={onDelete} />
        ))
      ) : (
        <li className="text-gray-500 text-center">No todos available</li>
      )}
    </ul>
  );
};

export default TodoList;