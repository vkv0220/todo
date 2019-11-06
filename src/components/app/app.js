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
        this.createToDoItem('Drink Coffee'),
        this.createToDoItem('Make something'),
        this.createToDoItem('Make something else')
      ],
      term: '',
      filt: 'all'
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
      const newElement = this.createToDoItem(text);
      //console.log(Math.round((new Date()).getMilliseconds().toString()*1000*Math.random()));

      this.setState(({ todoData }) => {
        return {todoData: [...todoData, newElement]};
      });
    };
  }
  counter = 100;

  createToDoItem(label) {
    return {label: label, important: false, done: false, id: this.counter++};
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const currItem = arr[idx];
    const newItem = {...currItem, [propName]: !currItem[propName]};

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {todoData: this.toggleProperty(todoData, id, 'important')};
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {todoData: this.toggleProperty(todoData, id, 'done')};
    });
  };

  onSearch = (text) => {
    this.setState({term: text});
  };

  onFilter = (filt) => {
    this.setState({filt: filt})
  };

  search = (items, term) => {
    if(term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1; //если строка содержится то вернет 0 или больше
    });
  };

  filter = (items, filt) => {
    if (filt === 'done') {
      return items.filter(el => el.done);
    }
    if (filt === 'active') {
      return items.filter(el => !el.done);
    }
    if(filt === 'all') {
      return items;
    }
  };

  render () {
    const { todoData, term, filt } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filt);
    const doneCount = todoData.filter(el => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter onFilter={this.onFilter}/>
        </div>
        <ToDoList todos={visibleItems}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone}/>
        <ItemAddForm onAdd={this.addItem}/>
        <RandomJoke/>
      </div>
    );
  }
};