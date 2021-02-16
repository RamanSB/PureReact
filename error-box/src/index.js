import React from 'react';
import ReactDOM from 'react-dom';
import warningLogoTest from './res/icons8-brake-warning-64.png';
import './index.css';

//Can put the image in the public directory so the server can access it OR import.
function ErrorBox(){
  return (
    <div className="error-box">
      <span id="span-text"><img id="error-img" src={warningLogoTest}/>The world is ending!</span>
    </div>
  );
}


ReactDOM.render(<ErrorBox/>, document.querySelector('#root'));
