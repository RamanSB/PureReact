import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import {ShopContext} from './App.js';
import { calculateCartTotal } from './HelperFunctions.js';

const Nav = ({activeTab, onTabChange}) => {

    console.log(`[Nav] activeTab: ${activeTab}`);

    const itemClass = (tabName) => {
      return (`App-nav-item ${
        activeTab === tabName ? 'selected' : ''
      }`);
    };

    const NavItem = ({itemName, children}) => {
      return (
        <li className={itemClass(itemName)}>
          <button onClick={() => {
              onTabChange(itemName);
            }
          }>{children}</button>
        </li>
      );
    }

    function CartSummary(){
      return (
        <ShopContext.Consumer>
          {
            cart => {
              let cartSize = cart.length;
              let suffix = cart.length == 1 ? "" : "s";
              if(cart.length == 0){
                return <span id="cart-summary-container"><FaShoppingCart/> Empty</span>
              } else {
                  let amount = calculateCartTotal(cart, 2);
                  console.log(`[Nav] ${amount}`);
                return (
                  <button id="cart-summary-container" onClick={() => onTabChange("cart")}><span><FaShoppingCart/> {cartSize + " Item"+suffix} ${amount}</span></button>
                );
              }
            }
          }
        </ShopContext.Consumer>
      )
    }

    return (
        <nav className="App-nav">
          <ul>
            <NavItem itemName="items">Items</NavItem>
            <NavItem itemName="cart">Cart</NavItem>
            <CartSummary style={{paddingTop:"40px"}}/>
          </ul>


        </nav>
  );
}

export default Nav;
