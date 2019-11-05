import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import ToDoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import RandomJoke from "./components/random-joke";

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList items={['Make something', 'Make something else']}/>
            <RandomJoke/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));