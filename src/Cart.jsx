import React from 'react';

const Cart = ({ cart, totalPrice, checkout, toggleCart,exit }) => (
  <div className="cart-container">
    
    <h2>ตะกร้าของคุณ</h2>
    <ul>
      {cart.map((item, index) => (
        <li key={index}>{item.name} - {item.price} บาท</li>
      ))}
    </ul>
    <p>ราคาทั้งหมด: <span>{totalPrice}</span> บาท</p>
    <button onClick={exit}>ปิด</button>
    <button onClick={checkout}>สั่งซื้อ</button>
  </div>
);

export default Cart;
