import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import '../Styles/react-day-picker.css'

export default class DepartureDate extends Component {
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.state = { selectedDay: new window.Date() }
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day })
  }

  render () {
    let { selectedDay } = this.state
    const modifiers  = {
      disabled: { before: new window.Date() }
    }

    return (
      <div className='input-wrap third'>
        <div className='input-field third'>
          <label>Departure date</label>
            <div className='dropdown'>
              <span
                className='dropdown-toggle date-dropdown-btn'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                {selectedDay.toLocaleDateString()}
              </span>
              <div
                className='dropdown-menu date-dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <DayPicker
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                />
              </div>
            </div>
        </div>
      </div>
    )
  }
}
