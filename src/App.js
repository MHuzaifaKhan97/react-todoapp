import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './components/TodoContext';

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
