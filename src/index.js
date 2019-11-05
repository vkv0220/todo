import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import ToDoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import RandomJoke from "./components/random-joke";

const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make something', important: false, id: 2 },
        { label: 'Make something else', important: true, id: 3 }
    ];
    return (
        <div className="container">
            <AppHeader />
            <SearchPanel/>
            <ToDoList todos={todoData}/>
            <RandomJoke/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));