import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css';


function DialogBox(props){
  let children = React.Children.toArray(props.children);
  let title, body, footer = null;


  console.log(`Dialog box children: props.children: ${JSON.stringify(props.children)}`);
  console.log(`Dialog box 1st child: ${JSON.stringify(children[0])}`);

  React.Children.forEach(props.children, x => {
    switch(x.type){
      case Title:
        title = x;
        break;
      case Body:
        body = x;
        break;
      case Footer:
        footer = x;
        break;
      default: throw new Error('A dialog box can take either: Title, Body or Footer components');
    }
  })

  return (
    <div id='dialog-box'>
        {title}
        <hr/>
        {body}
        <hr/>
        {footer}
    </div>
  );
}



function Title(props){
  console.log(`Title props.children: ${props.children}`);
  return <h4>{props.children}</h4>;
}

function Body(props){
  console.log(`Body props.children: ${props.children}`);
  return <p>{props.children}</p>;
}

function Footer(props){
  console.log(`Footer props.children: ${props.children}`);
  return (
    <div id='footer-container'>
      <button style={{marginRight:"8px"}}>{props.children}</button>
    </div>
  );
}


ReactDOM.render(
  <DialogBox>
    <Title>This is important</Title>
    <Body>Here is some important text or error or something.</Body>
    <Footer>Close</Footer>
  </DialogBox>,
  document.querySelector('#root'));
