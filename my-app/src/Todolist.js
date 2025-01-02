// src/TodoList.js
import React, { useState } from 'react';
import './TodoList.css'; // Импортируйте CSS файл

const vibrantColors = [
  '#ff69b4', // Розовый
  '#8a2be2', // Лиловый
  '#ff1493', // Малиновый
  '#800080', // Бордовый
  '#ff4500', // Рыжий
  '#50c878', // Изумрудный
  '#00ced1', // Голубой
  '#7b68ee', // Средне-синий
];

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      completed: false,
      color: vibrantColors[todos.length % vibrantColors.length], // Присваиваем цвет
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="title">Список ваших дел:</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.color, // Применяем цвет к тексту
              borderColor: todo.color,
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          const todoText = e.target.elements.todo.value;
          addTodo(todoText);
          e.target.reset();
        }}
      >
        <input type="text" name="todo" placeholder="Добавить дело" className="todo-input" />
        <button type="submit" className="todo-button">Добавить</button>
      </form>
    </div>
  );
};
