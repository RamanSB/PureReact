import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';



function ErrorBox(){
  return (
    <div style={{width:'200px', minHeight:'20px', color: 'black'}}>
      <img src=""/>
      <p>The world is ending</p>
    </div>
  );
}


ReactDOM.render(<ErrorBox/>, document.querySelector('#root'));
