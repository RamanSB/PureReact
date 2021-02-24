import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function Container(){
  const [names, setNames] = React.useState({
    firstName: "",
    lastName: ""
  });
  const inputFirstNameRef = React.useRef();
  const inputLastNameRef = React.useRef();

  const onSubmit = () => {
    setNames((names) => ({
      firstName: inputFirstNameRef.current.value,
      lastName: inputLastNameRef.current.value
    }));
  }

  return (
    <div id="container">
      <label>First Name:</label>
      <input type="text" ref={inputFirstNameRef}/>
      <br/>
      <label>Last Name:</label>
      <input type="text" ref={inputLastNameRef}/>
      <br/>
      <br/>
      <button onClick={onSubmit}>Submit!</button>
      <p>{`Hi ${names["firstName"]} ${names["lastName"]}`}</p>
    </div>
  )
}

ReactDOM.render(<Container/>, document.querySelector('#root'));
