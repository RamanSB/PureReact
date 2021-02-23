import React from 'react';

import './index.css';

function TextInput(props){
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    setText(text => (
      event.target.value
    ))
  }

  return (
    <>
      <label for="name-input">{props.children}</label>
      <input
        id="name-input"
        type="text"
        value={text}
        onChange={handleChange}
        />
    </>
  );
}

export default TextInput;
