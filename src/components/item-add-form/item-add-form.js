import React, { Component } from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {

  render() {
    return (
      <div className="item-add-form d-flex">
        <input type="text" className="form-control search-input"/>
        <button
          onClick={() => this.props.onAdd('Some text') }
          className="btn btn-outline-secondary">
          Add item
        </button>
      </div>
    );
  }
}