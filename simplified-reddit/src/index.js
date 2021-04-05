import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/mock-data.js';

import {FaArrowDown, FaArrowUp} from "react-icons/fa";

import './index.css';

/*
  state must include; number of comments and nu
*/

function Post({title, votes}){
  console.log(`[Post] `);
  return (
    <div className="post">
      <div className="vote-image-container">
        <VotingComponent/>
        <img id="post-image" src="logo192.png"/>
      </div>
      <RedditTile />
    </div>
  );
}

function VotingComponent(){
  console.log(`[VotingComponent] `);
  return (
    <div className="voting-component">
      <FaArrowUp className="vote-icon"/>
      <span style={{display:"block", paddingTop:"4px", paddingBottom:"4px", fontSize:"18px", color:"#BDBBBB", fontWeight:"bold"}}>22</span>
      <FaArrowDown className="vote-icon"/>
    </div>
  );
}

function RedditTile(){
  console.log(`[RedditTile] `);
  return (
    <div className="reddit-tile-container">
      <span id="tile-title">Netlify: Our conversion from Angular to React</span>
      <br/>
      <span id="tile-website">www.netlify.com</span>
      <br/>
      <br/>
      <span id="tile-post-time">Submitted 9 hours ago by <a style={{fontFamily:"bold", color:"black"}}>brianlamar</a></span>
      <ItemActionRow/>
    </div>
  );
}

function ItemActionRow(){
  console.log(`[ItemActionRow]`)
  return (
    <div className="action-item-row">
      <span style={{color:"#DA4C38", fontWeight:"bold"}}>10 comments&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>share&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>save&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>hide&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>report&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>pocket</span>
    </div>
  );
}


ReactDOM.render(<Post data={data}/>, document.querySelector('#root'));
