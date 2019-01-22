import React, { Component } from 'react';
import './App.css';

class ButtonGroup extends Component {
  render() {
    return (
      <div className="ButtonGroup">
        <div className="btn-group" role="group" aria-label="Basic example">
          {this.props.children}
        </div>
      </div>
    )
  }
}







export default ButtonGroup;
