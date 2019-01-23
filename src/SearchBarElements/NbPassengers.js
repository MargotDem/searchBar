import React, { Component } from 'react'

export default class NbPassengers extends Component {
  constructor(props) {
    super(props)
    this.state = ({ nbPassengers: 1 })
    this.countPassengers = this.countPassengers.bind(this)
  }

  countPassengers (increment) {
    let { nbPassengers } = this.state
    if (increment && nbPassengers < 10) {
      nbPassengers += 1
      this.setState({ nbPassengers })
    }
    if (!increment && nbPassengers > 1) {
      nbPassengers -= 1
      this.setState({ nbPassengers })
    }
  }

  render () {
    let { nbPassengers } = this.state
    let minusDisabled = nbPassengers === 1
    let plusDisabled = nbPassengers === 10

    return (
      <div className='input-wrap fourth'>
        <div className='input-field fourth'>
          <label>Passengers</label>
            <span
              onClick={() => { this.countPassengers(false) }}
              className={'fa fa-minus-circle ' + (minusDisabled && 'passengers-btn-disabled')}
            >
            </span>
            {nbPassengers}
            <span
              onClick={() => { this.countPassengers(true) }}
              className={'fa fa-plus-circle ' + (plusDisabled && 'passengers-btn-disabled')}
            >
            </span>
        </div>
      </div>
    )
  }
}
