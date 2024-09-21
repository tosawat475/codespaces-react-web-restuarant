import React from 'react';

const Header = ({ cartCount, toggleCart }) => (
  <header>
    <div className="header-container">
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" />
        <span>Hey Max!</span>
      </div>
      <input type="text" id="searchInput" placeholder="Search your meal..." />
      <div className="cart">
        <button id="cartButton" onClick={toggleCart}>ตะกร้า (<span id="cartCount">{cartCount}</span>)</button>
      </div>
    </div>
  </header>
);

export default Header;
