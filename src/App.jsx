import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import SummarySidebar from './components/SummarySidebar';
import TodoList from './components/TodoList';
import { getTodos, addTodo, updateTodo, deleteTodo, summarizeTodos } from './services/api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      console.log('Fetched todos:', response.data);
      setTodos(Array.isArray(response.data.data) ? response.data.data : []);
    } catch (error) {
      console.error('Fetch todos error:', error.message);
      toast.error('Failed to fetch todos');
    }
  };

  const handleAddTodo = async () => {
    if (!newTodo.trim()) {
      toast.error('Todo title cannot be empty');
      return;
    }
    try {
      await addTodo(newTodo);
      setNewTodo('');
      fetchTodos();
      toast.success('Todo added successfully');
    } catch (error) {
      console.error('Add todo error:', error.message);
      toast.error('Failed to add todo');
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      console.log('Updating todo:', { id, completed: !completed });
      await updateTodo(id, { completed: !completed });
      fetchTodos();
      toast.success('Todo updated successfully');
    } catch (error) {
      console.error('Update todo error:', error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || 'Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      console.log('Deleting todo:', id);
      await deleteTodo(id);
      fetchTodos();
      toast.success('Todo deleted successfully');
    } catch (error) {
      console.error('Delete todo error:', error.message);
      toast.error('Failed to delete todo');
    }
  };

  const handleSummarize = async () => {
    try {
      setIsLoadingSummary(true);
      const response = await summarizeTodos();
      setSummary(response.data.summary);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Summarize error:', error.response?.data?.error || error.message);
      toast.error(error.response?.data?.error || 'Failed to summarize todos');
    } finally {
      setIsLoadingSummary(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Todo Summary Assistant</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-6 rounded-lg ">
            <div className="flex mb-6">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="border border-gray-300 p-3 flex-grow rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Add a new todo"
              />
              <button
                onClick={handleAddTodo}
                className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition"
              >
                Add
              </button>
            </div>
            <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTodo} />
          </div>
          <SummarySidebar summary={summary} onSummarize={handleSummarize} isLoading={isLoadingSummary} />
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default App;