import React from 'react';
import ReactDOM from 'react-dom';

function App(){
  React.useEffect(() => {
    console.log(`[useEffect]`);
    function clickEventHandler(clickEvent){
      console.log(`[clickEventHandler]`)
      console.log(`Event - x:${clickEvent.x} y:${clickEvent.y}`);
    }
    document.addEventListener('click', clickEventHandler);
    return () => {
      console.log(`returned function from useEffect, removes eventHandler`);
      document.removeEventListener('click', clickEventHandler);
    }
  }, []); //empty array implies effect runs on mounting and unmounting.
  return (<div>React</div>)
}




ReactDOM.render(<App/>, document.querySelector('#root'));
