import React from 'react';
import ReactDOM from 'react-dom';


const reducer = (state, action) => {
  console.log(`${JSON.stringify(state)} | ${JSON.stringify(action)}`);
  switch(action.type){
    case 'add': return [...state, action.name];
    case 'clear': return [];
    default: return ['Coconut', 'Thai Green Curry', 'Soup', 'Vegetable Stock'];
  }
}

function ShoppingList(){
  const inputReference = React.useRef();
  const [items, dispatch] = React.useReducer(reducer, []);

  console.log(`[ShoppingList] items: ${items}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add",
      name: inputReference.current.value
    });
    inputReference.current.value = "";
  }

  return (
    <>
      <h3>Shopping List</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputReference}/>
      </form>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <button style={{width:'128px'}} onClick={()=>dispatch({type:"clear"})}>Clear</button>
    </>
  )

}



ReactDOM.render(<ShoppingList/>, document.querySelector('#root'));
