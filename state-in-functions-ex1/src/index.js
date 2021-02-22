import React from 'react';
import ReactDOM from 'react-dom';


function Room(){
  const [isLit, setIsLit] = React.useState(false); //Returns an array with initial state and a setter to change
  function clickHandler(){
    setIsLit(!isLit);
  }
  return (
    <div>
      <button onClick={clickHandler}>lightswitch</button>;
      <p>{isLit ? "The room is lit" : "The room is dark"}</p>
    </div>
  );
}

ReactDOM.render(<Room/>, document.querySelector('#root'));
