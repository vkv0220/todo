import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    active: 'all'
  };

  onPress = (filt) => {
    this.setState({active: filt});
    this.props.onFilter(filt);
  };

  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className={`btn btn-outline-info ${this.state.active === 'all' ? 'active' : null}`}
                onClick={() => this.onPress('all')}>All</button>
        <button type="button"
                className={`btn btn-outline-secondary ${this.state.active === 'active' ? 'active' : null}`}
                onClick={() => this.onPress('active')}>Active</button>
        <button type="button"
                className={`btn btn-outline-secondary ${this.state.active === 'done' ? 'active' : null}`}
                onClick={() => this.onPress('done')}>Done</button>
      </div>
    );
  }
}
