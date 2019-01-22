import React, { Component } from 'react'

import NbPassengers from './Buttons/NbPassengers'
import Search from './Buttons/Search'
import { DepartureCity, ArrivalCity } from './Buttons/Cities'
import { Date, ReturnDate } from './Buttons/Dates'

const BUTTONS = [
  <DepartureCity />,
  <ArrivalCity />,
  <Date />,
  <ReturnDate />,
  <NbPassengers />,
  <Search />
]

export default BUTTONS
