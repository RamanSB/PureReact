import React from 'react';

import './index.css';

function TextInput({children, parentCallback}){
  const [text, setText] = React.useState('');

  const handleChange = (event) => {
    parentCallback(event);
    console.log(`[handleChange] ${event.target.name}`);
    setText(text => (
      event.target.value
    ));
  }

  return (
    <>
      <label>{children}</label>
      <input
        name={children.replace(/[\s|:]/g, "").toLowerCase()}
        type="text"
        value={text}
        onChange={handleChange}
        />
    </>
  );
}

export default TextInput;
