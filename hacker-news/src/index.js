import React from 'react';
import ReactDOM from 'react-dom';
import hackerNewsLogo64 from './res/hackernews-logo-64.png';
import hackerNewsLogo32 from './res/hackernews-logo-32.png';
import moment from 'moment';
import './index.css';

function HackerNewsBanner(){
  return (
    <>
    <div style={{height:'100%', width: '768px', backgroundColor:'#FF6400'}}>
      <img style={{verticalAlign:'middle', border:"3px solid black"}}src={hackerNewsLogo32}/>
      <p id='main-title'>Hacker News</p>
      <span style={{verticalAlign:'middle', marginLeft:"16px", fontSize:'18px', paddingTop:'4px'}}>{"new | threads | comments | show | ask | jobs | submit"}</span>
    </div>
    <div style={{backgroundColor:"#F5F5EB", width:"768px"}}>
      {newsItems.map(x=><NewsItem props={x}/>)}
    </div>
    </>
  );
}

function NewsItem({props}){
  return (
    <div style={{display:"inline-flex", marginTop:"8px", marginBottom:"8px"}}>
      <span style={{fontSize:"18px", marginLeft:"12px", marginRight:"12px"}}>{props.id}.</span>
      <div>
        <ItemMainRow title={props.title} source={props.source}/>
        <ItemSubRow props={props}/>
      </div>
    </div>
  );
}


function ItemMainRow({title, source}){
  return (
    <div>
      <span className="news-title">{title}</span>
      <span className="news-source">({source})</span>
    </div>
  );
}

function ItemSubRow({props}){
  console.log(props.author);
  console.log(props.timestamp);
  let pointSuffix = props.points == 1 ? "point" : "points";
  let commentSuffix = props.comments == 1 ? "comment" : "comments";
  // console.log(`Points: ${JSON.stringify({points})}\nAuthor: ${JSON.stringify({author})}\nTimestamp: ${JSON.stringify({timestamp})}\nComments: ${{comments.length}}`);
  const timeString = moment(props.timestamp).fromNow();
  return (
    <div>
      <span className="news-source" id="sub-row-text">{`${props.points} ${pointSuffix} by ${props.author} ${timeString} | flag | hide | ${props.comments} ${commentSuffix} | instapaper | save to pocket`}</span>
    </div>
  );
}


const newsItem = {
  id: 1,
  title: "Superformula",
  source: "wikipedia.org",
  points: 77,
  comment: 17,
  author: "GuiA",
  timestamp: "2016-07-26 14:21:21"
}

const newsItems = [
   {
      id: 1,
      title: "Why I'm Suing the US Government",
      source: "bunniestudios.com",
      points: 1346,
      comments: 257,
      author: "ivank",
      timestamp: "2016-07-26 14:21:21"
    },
    {
      id: 2,
      title: "Zenziezenziezenzic",
      source: "wikipedia.org",
      points: 140,
      comments: 40,
      author: "ivinchuco",
      timestamp: "2022-07-26 14:21:21"
    },
    {
      id: 3,
      title: "Doing a React exercise",
      source: "davidcedia.com",
      points: 18,
      comments: 5,
      author: "ramansb",
      timestamp: "2021-02-18 05:01:00"
    },
    {
      id: 4,
      title: "Superformula",
      source: "wikipedia.org",
      points: 77,
      comments: 17,
      author: "GuiA",
      timestamp: "2016-07-26 14:21:21"
    },
    {
      id: 5,
      title: "HODL that BTC",
      source: "cryptomaniaks.com",
      points: 2099999,
      comments: 124121525,
      author: "Satoshi Nakamoto",
      timestamp: "2008-09-19 08:30:30"
    }
]

ReactDOM.render(<HackerNewsBanner/> , document.querySelector('#root'));
