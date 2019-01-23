import React, { Component } from 'react'
import Downshift from 'downshift'
const axios = require('axios')

class City extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      inputValue: null,
      cities: null
    })
    this.handleChange = this.handleChange.bind(this)
    this.autoComplete = this.autoComplete.bind(this)
  }

  handleChange (inputValue) {
    this.autoComplete(inputValue)
    this.setState({ inputValue })
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
        { i: 4, value: 'Nantes'},
        { i: 5, value: 'Toulouse'},
        { i: 6, value: 'Nice'},
        { i: 7, value: 'Strasbourg'}
      ]
      this.setState({ cities: data })
    })
  }

  render () {
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
                className='city-input'
                {...getInputProps()}
                placeholder={'...'}
              />
                {
                  isOpen
                  ? items && <div className='cities-dropdown'>
                    {
                      items
                        .filter(item => !inputValue || item.value.toLowerCase().includes(inputValue))
                        .map((item, index) => (
                          <div
                            {...getItemProps({
                              key: item.value,
                              index,
                              item,
                              style: {
                                color: '#555',
                                paddingLeft: '10px',
                                backgroundColor: highlightedIndex === index ? '#E8E8E8' : '#F8F8F8',
                                borderRadius:'3px',
                                cursor: 'pointer'
                              },
                            })}
                          >
                            {item.value}
                          </div>
                        ))
                      }
                    </div>
                  : null
                }
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
      <div className="input-wrap first">
        <div className="input-field first">
          <label>Departure city</label>
          <City />
        </div>
      </div>
    )
  }
}

export class ArrivalCity extends Component {
  render () {
    return (
      <div className="input-wrap second">
        <div className="input-field second">
          <label>Arrival city</label>
          <City />
        </div>
      </div>
    )
  }
}
