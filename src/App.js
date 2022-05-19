import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import data from './data.json';

function App() {
  const [data, setData] = useState({ hits: [] });
  return (
    <div className='todo-app'>
      <TodoList />
      <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
      
    </div>
  );
}

export default App;