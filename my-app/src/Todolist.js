import React, { useState } from 'react';
import './TodoList.css';

const vibrantColors = [
  '#ff69b4',
  '#8a2be2',
  '#ff1493',
  '#800080',
  '#ff4500',
  '#50c878',
  '#00ced1',
  '#7b68ee',
];

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      completed: false,
      color: vibrantColors[todos.length % vibrantColors.length],
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
              color: todo.color,
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
