import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function OrderContainer(){

  const [state, setState] = React.useState({
    menu: "",
    noEgg: false,
    specialInstructions: ""
  });

  const setMenuItem = (event) => {
    console.log(`[setMenuItem] ${event.target.value}`);
    setState({
      ...state,
      menu: event.target.value
    });
  }

  const setNoEgg = (event) => {
    console.log(`[setNoEgg] ${event.target.value}`);
    setState({
      ...state,
      noEgg: !state['noEgg']
    });
  }

  const setSpecialInstructions = (event) => {
    console.log(`[setSpecialInstructions] ${event.target.value}`);
    setState((state)=> ({
      ...state,
      specialInstructions: event.target.value
    }));
  }

  const setOnSendOrderHandler = (event) => {
    console.log(`[setOnSendOrderHandler] ${JSON.stringify(state)}`);
  }

  return (
    <div>
      <h1>Order Your HilibHouse</h1>
      <SizeComponent>small medium large xtra-large</SizeComponent>
      <div>
        <h4>Menu</h4>
        <select onChange={setMenuItem}>
          <option value="basta-bustaki">Basta & Bustaki</option>
          <option value="barees-hilib">Barees & Hilib</option>
          <option value="soogar">Soogar</option>
          <option value="cake">Cake</option>
        </select>
        <br/>
        <input type="checkbox" value="no-egg" style={{marginTop:"8px"}} onChange={setNoEgg} checked={state['noEgg']}/>
        <label>No egg</label>
        <br/>
        <div style={{marginTop:"12px"}}>
          <h4>Special instructions:</h4>
          <textarea onChange={setSpecialInstructions} value={state['specialInstructions']}/>
        </div>
        <button onClick={setOnSendOrderHandler}>Submit order!</button>
      </div>
    </div>
  );
}



function SizeComponent({children}){
  const [size, setSize] = React.useState('small');
  console.log(`${children}`);

  const handleSizeChange = (event) => {
    setSize({
      size: event.target.value
    });
  }

  let sizeItems = children.split(' ').map((item, idx) => {
    console.log(`[SizeComponent] item: ${item}\nsize: ${JSON.stringify(size)}`);
    return (
      <div key={idx} style={{display: "inline"}}>
        <input type="radio" value={item} onChange={handleSizeChange} checked={size["size"]===item}/>
        <label>{item[0].toUpperCase()+item.slice(1)}</label>
      </div>
    );
  })
  return (
    <>
      <h3>Size</h3>
      {sizeItems}
    </>
  );
}


ReactDOM.render(<OrderContainer/>, document.querySelector('#root'));
