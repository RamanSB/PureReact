import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


function CreditCard({cardInfo}){
  let {name, expiry, card_no, bank_name} = cardInfo;
  console.log(name);
  return (
    <div className="card">
      <span className="span-bank-name-text">{bank_name}</span>
      <CardNumberComponent cardNumber={card_no}/>
      <ExpiryComponent expiry={expiry}/>
      <span className="span-card-holder-text">{name}</span>
    </div>
  )
}

function CardNumberComponent({cardNumber}){
  return (
    <div className="card_number">
        <span className="span-bank-number-text">{cardNumber.slice(0, 4) + " "}</span>
        <span className="span-bank-number-text">{cardNumber.slice(4, 8) + " "}</span>
        <span className="span-bank-number-text">{cardNumber.slice(8, 12) + " "}</span>
        <span className="span-bank-number-text">{cardNumber.slice(12, 16) + " "}</span>
        <span style={{color: 'white'}}>{cardNumber.slice(0, 4)}</span>
    </div>
  )
}

function ExpiryComponent({expiry}){
  return (
    <div className="expiry">
        <span className="valid-thru">VALID THRU</span>
        <span className="expiry-date">{expiry}</span>
    </div>
  )
}

let example_card_object = {
  name : "Jimmy Cockril",
  expiry: "05/25",
  card_no: "1234567898765432",
  bank_name: "React Bank, JS"
}



ReactDOM.render(<CreditCard cardInfo={example_card_object}/>, document.querySelector('#root'));
