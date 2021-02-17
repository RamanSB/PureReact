import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

function Card({title, taskList, footerText}){
  return (
    <div className="card">
    <CardTitle text={title}/>
      <div id="task-container">
        {taskList.map(x => <Task taskText={x}/>)}
      </div>
      <Footer text={footerText}/>
    </div>
  );
}

function CardTitle({text}){
  return (
    <div id='header-container'>
      <p style={{fontWeight:"bold", fontSize:"20px", fontFamily:'Verdana'}}>{text}</p>
      <p>...</p>
    </div>
  );
}

function Task({taskText}){
  return (
    <div className="task-box">
      <p id="task-text">{taskText}</p>
    </div>
  );
}

function Footer({text}){
  return (
    <div id="footer-container">
      <p style={{marginLeft:'8px', fontSize:'18px'}}>{text}</p>
    </div>
  )
}


const aTaskList = ['Subwoofer', 'Non-porous, washable', 'Wings', 'Beveled Bezel', 'Bezeled Bevel', 'Seedless'];

ReactDOM.render(
  <Card title={"Phone Features"} taskList={aTaskList} footerText={"Add a card..."}/>,
  document.querySelector('#root')
);
