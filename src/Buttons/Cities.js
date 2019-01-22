import React, { Component } from 'react'
import Downshift from 'downshift'
const axios = require('axios')

class City extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      city: null,
      cities: null
    })
    this.handleChange = this.handleChange.bind(this)
    this.autoComplete = this.autoComplete.bind(this)
  }

  handleChange (inputValue) {
    this.autoComplete(inputValue)
    this.setState({ city: inputValue })
  }

  autoComplete (input) {
    axios.post('https://interview.sobus.fr:8080/autocomplete', {
      key: 'ImBuildingASearchBar',
      locale: 'fr',
      term: input
    })
    .then(response => {
      console.log(response)
      this.setState({ cities: response.data})
    })
    .catch(error => {
      console.log(error)
      let data = [
        { i: 1, value: 'Paris'},
        { i: 2, value: 'Lyon'},
        { i: 3, value: 'Marseille'},
        { i: 4, value: 'Nantes'}
      ]
      this.setState({ cities: data })
    })
  }

  render () {
    let { arrivalOrDeparture } = this.props
    let items = this.state.cities
    return (
        <Downshift
          onChange={(selection) => { this.handleChange(selection.value)}}
          itemToString={item => (item ? item.value : '')}
          onInputValueChange={(inputValue) => this.handleChange(inputValue)}
        >
          {
            ({
              getInputProps,
              getItemProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem,
            }) => (
              <div>
                <input
                  {...getInputProps()}
                  placeholder={arrivalOrDeparture}
                />
                  {isOpen
                    ? items && items
                        .filter(item => !inputValue || item.value.toLowerCase().includes(inputValue))
                        .map((item, index) => (
                          <div
                            {...getItemProps({
                              key: item.value,
                              index,
                              item,
                              style: {
                                backgroundColor:
                                  highlightedIndex === index ? 'gray' : 'black',
                                fontWeight: selectedItem === item ? 'bold' : 'normal',
                              },
                            })}
                          >
                          {item.value}
                        </div>
                      ))
                  : null}
            </div>
          )
        }
      </Downshift>
    )
  }
}

export class DepartureCity extends Component {
  render () {
    return (
      <City arrivalOrDeparture={"Departure city"} />
    )
  }
}

export class ArrivalCity extends Component {
  render () {
    return (
      <City arrivalOrDeparture={"Arrival city"} />
    )
  }
}
