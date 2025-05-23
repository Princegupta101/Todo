import axios from 'axios';

const API_BASE_URL = 'https://todo-xqtp.onrender.com/api';

export const getTodos = () => axios.get(`${API_BASE_URL}/todos`);

export const addTodo = (title) => axios.post(`${API_BASE_URL}/todos`, { title });

export const updateTodo = (id, updates) => axios.put(`${API_BASE_URL}/todos/${id}`, updates);

export const deleteTodo = (id) => axios.delete(`${API_BASE_URL}/todos/${id}`);

export const summarizeTodos = () => axios.post(`${API_BASE_URL}/summarize`);