import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  render() {
    const buttons = this.buttons.map(button => {
      const cla = this.props.filter === button.name ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
                className={`btn ${cla}`}
                key={button.name}
                onClick={() => this.props.onFilter(button.name)}>
          {button.label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
