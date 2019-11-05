import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false
    };

    this.onLabelClick = () => {
      this.setState(({done}) => ({done: !done}));
    };
    this.onMarkImportant = () => {
      this.setState(({important}) => ({important: !important}));
    };
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = 'todo-list-item';
    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
      <span
        onClick={this.onLabelClick}
        className="todo-list-item-label">
        {label}
      </span>

      <button type="button"
              onClick={this.onMarkImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
}