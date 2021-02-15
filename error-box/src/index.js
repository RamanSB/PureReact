import React from 'react';
import ReactDOM from 'react-dom';
import warningLogoTest from './res/icons8-warning-triangle-64.png';
import './index.css';


function ErrorBox(){
  return (
    <div className="error-box">
      <img src="/icons8-warning-triangle-64.png"/>
    </div>
  );
}


ReactDOM.render(<ErrorBox/>, document.querySelector('#root'));
