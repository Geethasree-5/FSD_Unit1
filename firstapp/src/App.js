import React, { Component } from 'react' ;
import Hobbies from './Components/Hobbies';
import Greetings from './Components/Greetings';
import Qualification from './Components/Qualification';
import Introduction from './Components/Introduction';
export default class App extends Component {
  render() {
    return (
      <div>
        <Greetings />
        <Hobbies />
        <Qualification />
        <Introduction/>
      </div>
    )
  }
}
