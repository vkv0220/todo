import React from 'react';
import ReactDOM from 'react-dom';
import joker from 'one-liner-joke';

const AppHeader = () => {
    return <h1>My Todo list</h1>;
};

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px'
    }
    return <input style={searchStyle} placeholder='Search'></input>;
};

const ToDoList = (props) => {
    const items = props.items;
    return (
        <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    );
};

const RandomJoke = () => {
    const joke = joker.getRandomJoke().body;
    return (<div>{joke}</div>);
}

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
