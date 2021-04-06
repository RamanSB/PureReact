import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/mock-data.js';

import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import moment from 'moment';
import './index.css';

/*
  state must include; number of comments and nu
*/



function Post({props}){
  console.log(`[Post] ${JSON.stringify(props)}`);
  let {votes, imgSrc} = props;
  return (
    <div className="post">
      <div className="vote-image-container">
        <VotingComponent votes={votes}/>
        <img id="post-image" src={imgSrc}/>
      </div>
      <RedditTile props={props}/>
    </div>
  );
}

function VotingComponent({votes}){
  console.log(`[VotingComponent] ${votes}`);
  return (
    <div className="voting-component">
      <FaArrowUp className="vote-icon"/>
      <span style={{display:"block", paddingTop:"4px", paddingBottom:"4px", fontSize:"18px", color:"#BDBBBB", fontWeight:"bold"}}>{votes}</span>
      <FaArrowDown className="vote-icon"/>
    </div>
  );
}

function RedditTile({props}){
  let {title, source, timestamp, username, comments} = props;
  let timestampMoment = moment(timestamp).fromNow();
  console.log(`[RedditTile] `);
  console.log(`Props: ${title} ${source} ${timestamp} ${username} ${comments}`);
  return (
    <div className="reddit-tile-container">
      <span id="tile-title">{title}</span>
      <br/>
      <span id="tile-website">{source}</span>
      <br/>
      <br/>
      <span id="tile-post-time">Submitted {timestampMoment} by <a style={{fontFamily:"bold", color:"black"}}>{username}</a></span>
      <ItemActionRow comments={comments}/>
    </div>
  );
}

function ItemActionRow({comments}){
  console.log(`[ItemActionRow]`)
  return (
    <div className="action-item-row">
      <span style={{color:"#DA4C38", fontWeight:"bold"}}>{comments} comments&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>share&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>save&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>hide&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>report&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>pocket</span>
    </div>
  );
}


ReactDOM.render(<Post props={data[0]}/>, document.querySelector('#root'));
