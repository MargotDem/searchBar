import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateComponent extends Component {
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.state = { selectedDay: undefined }
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day })
  }

  render () {
    let { selectedDay } = this.state
    let { date, oneWayTicket } = this.props
    // const modifiers = {
    //   highlighted: new Date(2019, 1, 23),
    // }

    return (
      <div className="dropdown">
        <span className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {
            selectedDay
            ? <span>{selectedDay.toLocaleDateString()}</span>
            : <span>{date}</span>
          }
        </span>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DayPicker onDayClick={this.handleDayClick} />
          {
            oneWayTicket && <span onClick={() => { this.handleDayClick(undefined) }}>
              One way ticket
            </span>
          }
        </div>
      </div>
    )
  }
}

export class Date extends Component {
  render () {
    return (
      <DateComponent
        date={"Departure date"}
      />
    )
  }
}

export class ReturnDate extends Component {
  render () {
    return (
      <DateComponent
        date={"Return date"}
        oneWayTicket
      />
    )
  }
}
