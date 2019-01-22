import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup'
import BUTTONS from './Buttons'
import './App.css';

class App extends Component {
  render() {
    let w = window.innerWidth;
    if (w > 425) {
      return (
        <div className="App">
          <ButtonGroup>
            {
              BUTTONS.map((item, i) => {
                return (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-secondary"
                  >
                    {item}
                  </button>
                )
              })
            }
          </ButtonGroup>
        </div>
      )
    } else {
      return (
        <div className="App">
          {
            BUTTONS.map((item, i) => {
              return (
                <div>
                  <ButtonGroup key={i}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                    >
                      {item}
                    </button>
                  </ButtonGroup>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default App;
