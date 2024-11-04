import React from 'react';

const Header = ({ cartCount, toggleCart,backmain,searchmenu }) => (
  <header>
    <div className="header-container">
      <div className="profile">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="Profile" />
        <span onClick={backmain}>Welcome to Resturant</span>
      </div>
      <input type="text" id="searchInput" placeholder="ค้นหาเมนู..."  />
      <div className="cart">
        <button id="cartButton" onClick={toggleCart}>ตะกร้า (<span id="cartCount">{cartCount}</span>)</button>
      </div>
    </div>
  </header>
);

export default Header;
