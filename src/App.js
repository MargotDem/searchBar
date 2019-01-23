import React, { Component } from 'react'

import { DepartureCity, ArrivalCity } from './SearchBarElements/Cities'
import Search from './SearchBarElements/Search'
import NbPassengers from './SearchBarElements/NbPassengers'
import Date from './SearchBarElements/Dates'

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

              <Date />

              <NbPassengers />

            </div>

            <Search />

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
