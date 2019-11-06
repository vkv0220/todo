import React, { Component } from 'react';

import './search-panel.css';


class SearchPanel extends Component {

    state = {
      searchText: ''
    };

    searchItems = (text) => {
        this.setState({searchText: text});
        this.props.onSearch(text);
    };

    render() {
        return (
          <input type="text"
                 className="form-control search-input"
                 placeholder="type to search"
                 onChange={(e) => this.searchItems(e.target.value)}
                 value={this.state.searchText}/>
        );
    }
};

export default SearchPanel;