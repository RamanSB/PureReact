import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function AddressLabel({person, style}){
  const name = person.name;
  const {city, postalCode, road, number} = person.address;
  return (
    <div className={style+"-address-label"}>
      <span className="person-text">{name}</span><br/>
      <span className="person-text">{number} {road}.</span><br/>
      <span className="person-text">{city}, {postalCode}</span>
    </div>
  );
}

let person_object_1 = {
  name : `Ramandeep Singh Bedi`,
  address : {
    city : `London`,
    postalCode : `E1 3AG`,
    road : `Pencil Road`,
    number : 842
  }
};

let person_object_2 = {
  name : `Darrell Kojo)`,
  address : {
    city : `London`,
    postalCode : `SE24 9DA`,
    road : `Norwood Estates`,
    number : 12
  }
};

function Stamp(){
  return (
    <div className="stamp">
      <span className="stamp-span-text">STAMP</span>
    </div>
  )
}


function Envelope({fromPerson, toPerson}){
  let senderName = fromPerson.name;
  let returnAddress = (fromPerson.number+" "+fromPerson.road);
  let returnPostalCode = (fromPerson.address.city + ", " + fromPerson.address.postalCode);

  let recipientName = toPerson.name;
  let recipientAddress = (toPerson.number+ " " + toPerson.road);
  let recipientPostalCode = (toPerson.address.city + ", " + toPerson.address.postalCode);

  return (
          <div className="envelope">
            <AddressLabel person={fromPerson} style="sender"/>
            <AddressLabel person={toPerson} style="recipient"/>
            <Stamp/>
          </div>
        );
}

ReactDOM.render(
  <Envelope fromPerson={person_object_1} toPerson={person_object_2}/>,
   document.querySelector('#root')
);
