import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/**
  React.children methods:
  forEach
  map
  count
  only
  toArray
*/

function FirstChildOnly({children}){
    console.log(`Logging: ${JSON.stringify(children)}`);
    let childrenArray = React.Children.toArray(children);
    console.log(`Logging: ${JSON.stringify(childrenArray)}`);
    let childToRender = null;
    if(children.length > 0){
       childToRender = childrenArray[0];
    }

    return (
      <div id="component-container">
        {childToRender}
      </div>
    );
}

ReactDOM.render(
  <FirstChildOnly>
    <p>Hi there, Im the 1st element</p>
    <span>Second element here</span>
  </FirstChildOnly>
  ,document.querySelector('#root'));
