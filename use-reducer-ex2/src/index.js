import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const filePrefix = 'light-switch-icon-32-';
const fileFormat = '.png'

const reducer = (state, action) => {
  let newLightLevel = (state+action);
  if(newLightLevel>3){
    newLightLevel = 0;
  }
  return newLightLevel;
}

function Room(){

    const [lightLevel, dispatch] = React.useReducer(reducer, 0);

    let imgSrcArray = [
      filePrefix+"off"+fileFormat,
      filePrefix+"dim"+fileFormat,
      filePrefix+"lit"+fileFormat,
      filePrefix+"bright"+fileFormat
    ];

    const handleClick = (event) => {
      dispatch(1);
    }

    return (
      <div className="container">
      <h2>Light (usingReducer)</h2>
        <img id="light-bulb" src={imgSrcArray[lightLevel]}/>
        <br/>
        <button onClick={handleClick} style={{width:"168px", height: "48px", marginTop:"16px", border:"4px dotted black", borderRadius:"16px"}}>LightSwitch</button>
        <br/>
        <button onClick={()=>dispatch(-lightLevel)} style={{marginTop:"16px", borderRadius:"8px"}}>Off</button>
      </div>
    )
}


ReactDOM.render(<Room/>, document.querySelector('#root'));
