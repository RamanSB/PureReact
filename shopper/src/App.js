import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { items } from './static-data';


function summarizeCart(cart){
  const groupedItems = cart.reduce((summary, item) => {
    console.log(`Summary: ${JSON.stringify(summary)}\nItem; ${JSON.stringify(item)}`);
    summary[item.id] = summary[item.id] || {
      ...item,
      count:0
    };

    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);
}

const App = () => {

  const [activeTab, setActiveTab] = React.useState('items');
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    console.log(`[AddToCart] ${JSON.stringify(cart)}`);
  };

  const removeItem = (item) => {
    let index = cart.findIndex(i => i.id === item.id);
    if(index >= 0){
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  }



  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content onAddToCart={addToCart} tab={activeTab} cart={summarizeCart(cart)} onRemoveItem={removeItem}/>
      </main>
    </div>
  );
};


const Content = ({onAddToCart, tab, cart, onRemoveItem}) => {
  console.log(`Tab: ${JSON.stringify(tab)}`);
  switch(tab){
    default:
    case 'items':
      return (
        <ItemPage
          items={items}
          onAddToCart={onAddToCart}/>
      );
    case 'cart':
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}/>
      );
  }
};


export default App;
