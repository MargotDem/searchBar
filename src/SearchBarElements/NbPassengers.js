import React, { Component } from 'react'

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
      if (nbPassengers > 1) {
        nbPassengers -= 1
      }
      this.setState({
        nbPassengers
      })
    }
  }

  render () {
    let { nbPassengers } = this.state
    return (

      <div class="input-wrap fourth">
        <div class="input-field fourth">
          <label>Passengers</label>
            <span
              onClick={() => { this.countPassengers(false) }}
              class="fas fa-minus-circle"
            >
            </span>
            &nbsp;
            &nbsp;
            <span>{nbPassengers}</span>
            &nbsp;
            &nbsp;
            <span
              onClick={() => { this.countPassengers(true) }}
              class="fas fa-plus-circle"
            >
            </span>
        </div>
      </div>
    )
  }
}
