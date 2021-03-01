import React from 'react';
import ReactDOM from 'react-dom';


function InputBox(){

  const inputRef = React.useRef();
  const [value, setValue] = React.useState('Exercise 1');

  React.useEffect(() => {
      console.log(`[useEffect] ${value}`);
      document.title=value;
  }, [value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(inputRef.current.value);
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text"/>
        </form>
      </>
  )

}


ReactDOM.render(<InputBox/>, document.querySelector('#root'));
