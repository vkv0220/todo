import React, {Component} from 'react';

import AppHeader from "../app-header";
import ToDoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import RandomJoke from "../random-joke";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make something', important: false, id: 2 },
      { label: 'Make something else', important: true, id: 3 }
      ]
    };
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        // const idx = todoData.findIndex(el => el.id === id);
        // const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
        // return {todoData: newArray};
        return {todoData: todoData.filter(el => el.id !== id)}
      });
    };
    this.addItem = (text) => {
      const newElement = {label: text, important: false, id: this.counter++}
      //console.log(Math.round((new Date()).getMilliseconds().toString()*1000*Math.random()));

      this.setState(({ todoData }) => {
        return {todoData: [...todoData, newElement]};
      });
    };
  }
  counter = 100;

  onToggleImportant = (id) => {
    console.log(id);
  }

  onToggleDone = (id) => {
    console.log(id);
  }

  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <ToDoList todos={this.state.todoData}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>
        <ItemAddForm onAdd={this.addItem}/>
        <RandomJoke/>
      </div>
    );
  }
};