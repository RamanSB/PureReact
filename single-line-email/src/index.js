import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
3 SubComponents:
1) EmailActionItem (checkbox + pin)
Container for 2) & 3) (EmailDetailSection)
2) EmailTitleRow (Email Subject, subSubject, Date)
3) EmailSubtitleRow (Email subSubject + emailText (truncated)...)
*/

function EmailActionItem(){
  return (
    <div className="action-item-pin">
      <input
        type="checkbox"
        id="email-item-checkbox"
        value="email-action-item"/>
      <img src="email-pin-icon.png" style={{width: '20px', height: '20px', marginLeft: '8px'}}/>
    </div>
  );
}

function EmailTitleRow({sender, subject, date}){
  return (
    <div className="title-row">
      <span style={{fontFamily : 'Times New Roman'}}>{sender}</span>
      <span style={{marginRight:'120px'}}>{subject}</span>
      <span>{date}</span>
    </div>
  );
}

function EmailSubtitleRow({message}){
  return (
    <div style={{textAlign:'left'}}>
      <span className="subtitle-text">{message}</span>
    </div>
  );
}


function EmailDetailSection({email_data}){
  return (
    <div style={{marginLeft: '20px'}}>
      <EmailTitleRow sender={email_data.sender} subject={email_data.subject} date={email_data.date}/>
      <EmailSubtitleRow message={email_data.message}/>
    </div>
  );
}

function EmailItem({email}){
  return (
    <div style={{
        width: '700px',
        height: '80px',
        textAlign: 'center',
        display: 'flex'
      }}>
      <hr/>
      <EmailActionItem/>
      <EmailDetailSection email_data={email}/>
      <hr/>
    </div>
  );
}

let test_email = {
  sender: "ReactNewsletter",
  subject: "React Newsletter - Issue 38",
  date: "Jul 15",
  message: "Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comm"
}


ReactDOM.render(<EmailItem email={test_email}/>, document.querySelector('#root'));
