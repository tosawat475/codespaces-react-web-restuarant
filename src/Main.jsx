import React from 'react';
import './Main.css';

const Main = ({ goToHomePage }) => {
  return (
    <div className="container">
      <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" alt="Logo" className="logo" />
      <span onClick={goToHomePage} className="button">กดคลิ๊กเพื่อเริ่มสั่งอาหาร!</span>
    </div>
  );
};

export default Main;
