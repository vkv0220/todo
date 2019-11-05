import React from 'react';

import AppHeader from "../app-header";
import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import RandomJoke from "../random-joke";
import './app.css';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make something', important: false, id: 2 },
    { label: 'Make something else', important: true, id: 3 }
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <ToDoList todos={todoData} onDeleted={ (id) => {console.log(id)}}/>
      <RandomJoke/>
    </div>
  );
};

export default App;