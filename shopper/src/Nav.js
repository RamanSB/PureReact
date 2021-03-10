import React from 'react'

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

    return (
      <nav className="App-nav">
        <ul>
          <NavItem itemName="items">Items</NavItem>
          <NavItem itemName="cart">Cart</NavItem>
        </ul>
      </nav>
  );
}

export default Nav;
