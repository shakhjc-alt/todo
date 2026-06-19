import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Todo {
  id: string;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: inputValue.trim()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Todo List</h1>
        <span>{todos.length} задач</span>
      </div>

      <div className="todo-input">
        <input 
          type="text" 
          placeholder="Введите новую задачу" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTodo}>
          <PlusCircle size={20} /> Добавить
        </button>
      </div>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <span className="todo-item-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}