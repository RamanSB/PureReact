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
  //splice mutates the object
  //slice does not
*/

function FirstChildOnly({children}){
    console.log(`Logging: ${JSON.stringify(children)}`);
    let childrenArray = React.Children.toArray(children);
    console.log(`Logging: ${JSON.stringify(childrenArray)}`);
    let childToRender = null;
    if(childrenArray.length > 0){
       childToRender = childrenArray[0];
    }

    return (
      <div id="component-container">
        {childToRender}
      </div>
    );
}

function LastChildOnly({children}){
    console.log(`Logging: ${JSON.stringify(children)}`);
    let childrenArray = React.Children.toArray(children);
    let childToRender = null;
    if(childrenArray.length > 0){
      childToRender = childrenArray[childrenArray.length - 1];
    }
    console.log(`Logging: last element: ${JSON.stringify(childToRender)}`);
    return (
      <div id="component-container">
        {childToRender}
      </div>
    );
}

function Head(props){
    console.log(`Number: ${JSON.stringify(props.number)}`);
    console.log(`Children: ${JSON.stringify(props.children)}`);
    let childrenArray = React.Children.toArray(props.children);
    if(props.number > childrenArray.length){
      return <p>There only exists {childrenArray.length} elements, not {props.number}</p>
    }
    let result = childrenArray.splice(0, props.number);
    return (
      <div id="component-container">
        {result}
      </div>
    );
}

function Tail(props){
    let childrenArray = React.Children.toArray(props.children);
    if(props.number > childrenArray.length){
      return <p>There only exists {childrenArray.length} elements, not {props.number}</p>
    }
    console.log(`Hello: ${JSON.stringify(childrenArray)}`);
    let result = childrenArray.slice(-props.number);
    console.log(`Hello: ${JSON.stringify(result)}`);
    return (
      <div id="component-container">
        {result}
      </div>
    );
}

ReactDOM.render(
  <Tail number={3}>
    <p>hey</p>
    <p>ma</p>
    <p>whats</p>
    <p>up</p>
    <p>you</p>
    <p>good</p>
  </Tail>
  ,document.querySelector('#root'));
