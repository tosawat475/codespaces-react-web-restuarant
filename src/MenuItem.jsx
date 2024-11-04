import React, { useState } from 'react';

const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1); // สถานะสำหรับจำนวนที่ผู้ใช้เลือก

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...item, quantity }); // เพิ่มจำนวนในรายการที่ต้องการเพิ่มในตะกร้า
      setQuantity(1); // รีเซ็ตจำนวนหลังจากเพิ่มลงในตะกร้า
    }
  };

  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <div className="menu-details">
        <h3>{item.name}</h3>
        <p>ราคา: {item.price} บาท</p>
        <div>
          <label htmlFor={`quantity-${item.name}`}>จำนวน:</label>
          <input
            type="number"
            id={`quantity-${item.name}`}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <button onClick={handleAddToCart}>ใส่ในตะกร้า</button>
      </div>
    </div>
  );
};

export default MenuItem;
