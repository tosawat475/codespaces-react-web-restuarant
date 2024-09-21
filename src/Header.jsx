import React from 'react';

const Header = ({ cartCount, toggleCart }) => (
  <header>
    <div className="header-container">
      <div className="profile">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="Profile" />
        <span>Welcome to Resturant</span>
      </div>
      <input type="text" id="searchInput" placeholder="Search your meal..." />
      <div className="cart">
        <button id="cartButton" onClick={toggleCart}>ตะกร้า (<span id="cartCount">{cartCount}</span>)</button>
      </div>
    </div>
  </header>
);

export default Header;
