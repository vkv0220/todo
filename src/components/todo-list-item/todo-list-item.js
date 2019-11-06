import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
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
        // onClick={this.onLabelClick}
        onClick={onToggleDone}
        className="todo-list-item-label">
        {label}
      </span>

      <button type="button"
              // onClick={this.onMarkImportant}
        onClick={onToggleImportant}
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