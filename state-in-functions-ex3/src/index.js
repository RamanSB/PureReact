import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Decrementer({state_updater, component_name}){
  console.log(`[Decrementer] component_name: ${component_name}`);
  function handleDecrement(){
    console.log(`[handleDecrement] component_name: ${component_name}`);
    state_updater((prevState) => (
      (prevState[component_name]-1 <= 0) ?
         {
          ...prevState,
          [component_name]:50
        }
      :
       {
        ...prevState,
        [component_name]:prevState[component_name]-1
      }
    ));
  }
  return (
    <button style={{marginRight:"28px"}} onClick={handleDecrement}>-</button>
  );
}

function Incrementer({state, state_updater, component_name}){
  function handleIncrement(){
    console.log(`[hanldeIncrement] state.component_name: ${state.component_name}`);
    state_updater((prevState) => (
      (prevState[component_name] >= 100) ?
       {
         ...prevState,
         [component_name]: 50
       }
        :
       {
        ...prevState,
        [component_name]: prevState[component_name]+1
      }
    ));

    console.log(`[handleIncrement] after updater: ${JSON.stringify(state)}`);
  }

  return (
    <button style={{marginLeft:"28px"}} onClick={handleIncrement}>+</button>
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
    treble: 12
  };
  const [volumes, setVolumes] = React.useState(initState)
  console.log(`[speakerComponent] volumes: ${JSON.stringify(volumes)}`);
  return (
    <div id="attribute-container">
      <Decrementer state_updater={setVolumes} component_name={name}/>
        <div style={{width:"96px", textAlign:"center"}}>
          <SoundValue value={volumes[name]}/>
          <SoundAttribute>{name}</SoundAttribute>
        </div>
      <Incrementer state={volumes} state_updater={setVolumes} component_name={name}/>
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
