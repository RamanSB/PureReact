import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const passcode = "454511";

const reducer = (state, action) => {
  let newState = state.concat(action);
  console.log(`[reducer] action: ${action} newState: ${JSON.stringify(newState)}`);
  if(newState.length > 6){
    return "";
  }
  return newState;
}

function Container(){
  const [passcode, dispatch] = React.useReducer(reducer, ""); //empty passcode initially
  console.log(`[container] ${passcode}`);
  return (
      <div className="container">
        <Display passcodeProp={passcode}/>
        <Keypad passcode={passcode} dispatcher={dispatch}/>
      </div>
  );
}

function Keypad({passcode, dispatcher}){

  function handleButtonPress(event){
    console.log(`[handleButtonPress] ${event.target.value}`);
    dispatcher(event.target.value);
  }
  return (
    <div className="keypad">
      <button style={{gridColumnStart:"1", gridColumnEnd:"2", gridRowStart:"1", gridRowStart:"2"}} value="1" onClick={handleButtonPress}>1</button>
      <button style={{gridColumnStart:"2", gridColumnEnd:"3", gridRowStart:"1", gridRowStart:"2"}} value="2" onClick={handleButtonPress}>2</button>
      <button style={{gridColumnStart:"3", gridColumnEnd:"4", gridRowStart:"1", gridRowStart:"2"}} value="3" onClick={handleButtonPress}>3</button>
      <button style={{gridColumnStart:"1", gridColumnEnd:"2", gridRowStart:"2", gridRowStart:"3"}} value="4" onClick={handleButtonPress}>4</button>
      <button style={{gridColumnStart:"2", gridColumnEnd:"3", gridRowStart:"2", gridRowStart:"3"}} value="5" onClick={handleButtonPress}>5</button>
      <button style={{gridColumnStart:"3", gridColumnEnd:"4", gridRowStart:"2", gridRowStart:"3"}} value="6" onClick={handleButtonPress}>6</button>
    </div>
  )
}

function Display({passcodeProp}){
  console.log(`[display] ${passcodeProp}`);
  return (
    <div id="display">
      <p id="display-text">{passcodeProp===passcode ? "Unlocked": "Locked"}</p>
    </div>
  )
}


ReactDOM.render(<Container/>, document.querySelector('#root'));
