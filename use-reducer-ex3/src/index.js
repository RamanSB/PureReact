import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Container(){
  return (
      <div className="container">
        <Display/>
        <Keypad/>
      </div>
  );
}

function Keypad(){
  return (
    <div className="keypad">
      <button style={{gridColumnStart:"1", gridColumnEnd:"2", gridRowStart:"1", gridRowStart:"2"}}>1</button>
      <button style={{gridColumnStart:"2", gridColumnEnd:"3", gridRowStart:"1", gridRowStart:"2"}}>2</button>
      <button style={{gridColumnStart:"3", gridColumnEnd:"4", gridRowStart:"1", gridRowStart:"2"}}>3</button>
      <button style={{gridColumnStart:"1", gridColumnEnd:"2", gridRowStart:"2", gridRowStart:"3"}}>4</button>
      <button style={{gridColumnStart:"2", gridColumnEnd:"3", gridRowStart:"2", gridRowStart:"3"}}>5</button>
      <button style={{gridColumnStart:"3", gridColumnEnd:"4", gridRowStart:"2", gridRowStart:"3"}}>6</button>
    </div>
  )
}

function Display(){
  return (
    <div id="display">
      <p id="display-text">Locked</p>
    </div>
  )
}


ReactDOM.render(<Container/>, document.querySelector('#root'));
