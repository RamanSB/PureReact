import TextInput from './TextInput.js';
import React, {useState} from 'react'
import ReactDOM from 'react-dom';

function Container(){ // eslint-disable-line
  const [textState, setTextState] = useState({
    firstName:"",
    lastName:""
  })
  function parentCallback(event){
    console.log(`[Container - parentCallback] ${event.target.value}`);
    console.log(`[Container - parentCallback] ${event.target.name}`)

    setTextState((textState) => {
      switch(event.target.name) {
        case "firstname": return {
          ...textState,
          ['firstName'] : event.target.value
        };

        case "lastname": return {
          ...textState,
          ['lastName'] : event.target.value
        };
      }
    });
  }
  return (
    <div>
      <TextInput parentCallback={parentCallback}>First Name:</TextInput>
      <br/>
      <TextInput parentCallback={parentCallback}>Last Name:</TextInput>
      <p>{`Hi ${textState["firstName"]} ${textState["lastName"]}`}</p>
    </div>
  );
}


ReactDOM.render((
  <Container/>
), document.querySelector('#root'));
