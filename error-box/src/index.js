import React from 'react';
import ReactDOM from 'react-dom';
import warningLogoTest from './res/icons8-brake-warning-64.png';
import PropTypes from 'prop-types';
import './index.css';

//Can put the image in the public directory so the server can access it OR import.
function ErrorBox({children}){
  return (
    <div className="error-box">
      <span id="span-text"><img id="error-img" src={warningLogoTest}/>{children}</span>
    </div>
  );
}

ErrorBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired
  ])
}

let children = "The world is ending!";


ReactDOM.render(<ErrorBox children={children}/>, document.querySelector('#root'));
