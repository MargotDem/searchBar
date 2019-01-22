import React, { Component } from 'react';

export default class NbPassengers extends Component {
  constructor(props) {
    super(props)
    this.state = ({ nbPassengers: 1})
    this.countPassengers = this.countPassengers.bind(this)
  }

  countPassengers (increment) {
    let { nbPassengers } = this.state
    if (increment) {
      nbPassengers += 1
      this.setState({
        nbPassengers
      })
    } else {
      nbPassengers -= 1
      this.setState({
        nbPassengers
      })
    }
  }

  render () {
    let { nbPassengers } = this.state
    return (
      <div>
        <span>{nbPassengers}</span>
        &nbsp;
        &nbsp;
        <span onClick={() => { this.countPassengers(true) }}>+</span>
        &nbsp;
        &nbsp;
        <span onClick={() => { this.countPassengers(false) }}>-</span>
      </div>
    )
  }
}
