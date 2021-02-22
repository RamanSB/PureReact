import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Decrementer(){
  return (
    <button style={{marginRight:"28px"}}>-</button>
  );
}

function Incrementer(){
  return (
    <button style={{marginLeft:"28px"}}>+</button>
  );
}

function SoundAttribute(props){
  return <p style={{fontSize:"18px", fontFamily:"Verdana", margin:"0px"}}>{props.children.toUpperCase()}</p>
}

function SoundValue({value}){
  return <p style={{textAlign:"center", fontSize:"24px",margin:"0px"}}>{value}</p>
}

function SpeakerComponent({name}){
  let initState = {
    volume: 89,
    bass: 41,
    mid: 50,
    treble: 32
  };
  const [volumes, setVolumes] = React.useState(initState)

  return (
    <div id="attribute-container">
      <Decrementer/>
        <div>
          <SoundValue value={volumes[name]}/>
          <SoundAttribute>{name}</SoundAttribute>
        </div>
      <Incrementer/>
    </div>
  );
}

function Speaker(){
  return (
    <>
      <SpeakerComponent name={"volume"}/>
      <SpeakerComponent name={"treble"}/>
      <SpeakerComponent name={"mid"}/>
      <SpeakerComponent name={"bass"}/>
    </>
  )
}


ReactDOM.render(<Speaker/>, document.querySelector('#root'));
