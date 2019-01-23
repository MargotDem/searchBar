import React from 'react'

import NbPassengers from './Buttons/NbPassengers'
import Search from './Buttons/Search'
import { DepartureCity, ArrivalCity } from './Buttons/Cities'
import { Date } from './Buttons/Dates'

const BUTTONS = [
  <DepartureCity />,
  <ArrivalCity />,
  <Date />,
  <NbPassengers />,
  <Search />
]

export default BUTTONS
