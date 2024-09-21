import React from 'react';

const MenuItem = ({ item, addToCart }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} />
    <div className="menu-details">
      <h3>{item.name}</h3>
      <p>ราคา: {item.price} บาท</p>
      <button onClick={() => addToCart(item)}>ใส่ในตะกร้า</button>
    </div>
  </div>
);

export default MenuItem;
