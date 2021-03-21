import React from 'react';
import ReactDOM from 'react-dom';

import {FaArrowDown, FaArrowUp} from "react-icons/fa";

import './index.css';
/*
  state must include; number of comments and nu
*/
function Post(){
  return (
    <div className="post">
      <VotingComponent style={{marginBottom:"24px"}}/>
      <img style={{display:"inline", height:"40px"}} src="logo192.png"/>
    </div>
  );
}

function VotingComponent(){
  return (
    <div style={{backgroundColor:"orange", width:"min-content", textAlign:"center"}}>
      <FaArrowUp className="vote-icon"/>
      <span style={{display:"block", paddingTop:"4px", paddingBottom:"4px", fontSize:"18px"}}>22</span>
      <FaArrowDown className="vote-icon"/>
    </div>
  );
}


ReactDOM.render(<Post/>, document.querySelector('#root'));
