import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

/**
ToDo: add PropTypes
image - string
title - string
text - string
*/

function Poster({image, title, text}){

  return (
    <div style={{
      width: '600px',
      height: '400px',
      backgroundColor: 'black',
      position : 'relative',
      textAlign: 'center'
    }}>

    <img className="poster-image" src={image}/>
    <h1 style={{
          color: 'white',
          marginTop: '10px',
          textTransform: 'uppercase',
          fontSize: '40px',
          letterSpacing: '2px',
          color: 'lightgrey'
        }}>{title}
    </h1>

    <p style={{color: 'lightgrey'}}>{text}</p>

    </div>
  )
}

Poster.propTypes = PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}).isRequired;


ReactDOM.render(<Poster
                  image="bitcoin-poster.png"
                  title="Bitcoin"
                  text="Expert HODLer's claim that the bitcoin could reach $100K by 2030."
                />
    , document.querySelector('#root'));
