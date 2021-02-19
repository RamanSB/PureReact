import React from 'react';
import ReactDOM from 'react-dom'

import './index.css';

class House extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        kitchen: false,
        bedroom: false,
        bathroom: false,
        loft: false
      }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(room){
      console.log(`Handling button click for room: ${room}`);
      this.setState((prevState, props) => (
        {
          [room]: !prevState[room]
        }
      ), function(){console.log(JSON.stringify(this.state));});
    }


    render(){

      return (
        <div id="flex-box-container">
          <button className={this.state['kitchen'] ? "lights-on" : "lights-off"} onClick={()=>this.handleClick('kitchen')}>Kitchen Light</button>
          <button className={this.state['bedroom'] ? "lights-on" : "lights-off"} onClick={()=>this.handleClick('bedroom')}>Bedroom Light</button>
          <button className={this.state['bathroom'] ? "lights-on" : "lights-off"} onClick={()=>this.handleClick('bathroom')}>Bathroom Light</button>
          <button className={this.state['loft'] ? "lights-on" : "lights-off"} onClick={()=>this.handleClick('loft')}>Loft Light</button>
        </div>
      );
    }

}

export default House;
