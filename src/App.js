import React, { Component } from 'react'

import { DepartureCity, ArrivalCity } from './SearchBarElements/Cities'
import Search from './SearchBarElements/Search'
import NbPassengers from './SearchBarElements/NbPassengers'
import DepartureDate from './SearchBarElements/Date'

import './Styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <form>
          <fieldset>
            <legend>Book your bus tickets</legend>
          </fieldset>
          <div className='inner-form'>
            <div className='left'>
              <DepartureCity />
              <ArrivalCity />
              <DepartureDate />
              <NbPassengers />
            </div>
            <Search />
          </div>
        </form>
      </div>
    )
  }
}

export default App
