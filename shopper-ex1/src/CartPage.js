import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
import {calculateCartTotal} from './HelperFunctions.js';

function CartPage({items, onAddOne, onRemoveOne}){
  console.log(`[CartPage] ${JSON.stringify(items)}`);

  function EmptyCartText(){
    return (
      <div>
        <span className="Cart-emptyText" style={{marginTop:"80px"}}>Your cart is empty.</span>
        <span className="Cart-emptyText">Why not add some expensive products to it?</span>
      </div>
    );
  }

  let cartTotal = calculateCartTotal(items, 2);

  return (
    <>
      <ul className="CartPage-items">
        {items.map(item => {
          return (
            <li key={item.id} className="CartPage-item">
                <Item item={item}>
                  <div className="CartItem-controls">
                    <button
                      className="CartItem-removeOne"
                      onClick={() => onRemoveOne(item)}>&ndash;</button>
                    <span className="CartItem-count">{item.count}</span>
                    <button
                      className="CartItem-addOne"
                      onClick={() => onAddOne(item)}>+</button>
                  </div>
                </Item>
            </li>
          );
        })}
      </ul>
      {cartTotal === 0 ? <EmptyCartText/> : <span className="Cart-total">Total: ${cartTotal}</span>}
    </>
  );
}



CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
