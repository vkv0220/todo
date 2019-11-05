import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import ToDoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";
import RandomJoke from "./components/random-joke";
import './index.css';

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
            <ToDoList todos={todoData}/>
            <RandomJoke/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));