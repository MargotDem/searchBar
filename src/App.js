import React, { Component } from 'react'

// import ButtonGroup from './ButtonGroup'
// import BUTTONS from './Buttons'

import { DepartureCity, ArrivalCity } from './Buttons/Cities'
// import NbPassengers from './Buttons/NbPassengers'
// import Search from './Buttons/Search'
// import { Date } from './Buttons/Dates'

import './App.css';
import './Template.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <form>
          <div class="inner-form">
            <div class="left">

              <DepartureCity />

              <ArrivalCity />

              <div class="input-wrap third">
                <div class="input-field third">
                  <label>Departure date</label>
                  <input type="text" placeholder="Date" />
                </div>
              </div>

              <div class="input-wrap fourth">
                <div class="input-field fourth">
                  <label>Passengers</label>
                  <input type="text" placeholder="1" />
                </div>
              </div>

            </div>

            <button class="btn-search" type="button">SEARCH</button>

          </div>
        </form>
      </div>
    )
  }
}

export default App;

// render() {
//   let w = window.innerWidth;
//   if (w > 425) {
//     return (
//       <div className="App">
//         <ButtonGroup>
//           {
//             BUTTONS.map((item, key) => {
//               return (
//                 <button
//                   key={key}
//                   type="button"
//                   className="btn btn-secondary"
//                 >
//                   {item}
//                 </button>
//               )
//             })
//           }
//         </ButtonGroup>
//       </div>
//     )
//   } else {
//     return (
//       <div className="App">
//         {
//           BUTTONS.map((item, key) => {
//             return (
//               <div key={key}>
//                 <ButtonGroup>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                   >
//                     {item}
//                   </button>
//                 </ButtonGroup>
//               </div>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }
