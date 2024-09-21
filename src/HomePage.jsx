import React, { useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import Cart from './Cart';

const menuItems = [
  { name: 'สปาเกตตี้แฮมเห็ด', price: 150, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
  // Add more items as needed
];

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const toggleCart = () => {
    document.querySelector('.cart-container').classList.toggle('show');
  };

  const checkout = () => {
    alert('คุณได้สั่งซื้อสินค้าเรียบร้อยแล้ว');
    setCart([]);
    setTotalPrice(0);
    toggleCart();
  };

  return (
    <div>
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <main>
        <section className="menu-section">
          <h2>เมนูแนะนำ</h2>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>
      <Cart cart={cart} totalPrice={totalPrice} checkout={checkout} toggleCart={toggleCart} />
    </div>
  );
};

export default HomePage;
