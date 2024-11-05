import React, { useEffect, useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import Cart from './Cart';
import axios from 'axios';

const HomePage = () => {
  const URL = "https://reimagined-engine-jj4p45r76qj6crww-5000.app.github.dev";
  
  const [menuItems, setMenuItems] = useState([]);
  const [menumain, setMenumain] = useState([]);
  const [menusnack, setMenusnack] = useState([]);
  const [menudrink, setMenudrink] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ดึงข้อมูลสำหรับแต่ละเมนู
  useEffect(() => {
    axios.get(`${URL}/api/menuItem`)
      .then(response => setMenuItems(response.data))
      .catch(error => console.log("Error fetching menu items:", error));
  }, []);

  useEffect(() => {
    axios.get(`${URL}/api/menumain`)
      .then(response => setMenumain(response.data))
      .catch(error => console.log("Error fetching main dishes:", error));
  }, []);

  useEffect(() => {
    axios.get(`${URL}/api/menusnack`)
      .then(response => setMenusnack(response.data))
      .catch(error => console.log("Error fetching snacks:", error));
  }, []);

  useEffect(() => {
    axios.get(`${URL}/api/menudrink`)
      .then(response => setMenudrink(response.data))
      .catch(error => console.log("Error fetching drinks:", error));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const deleteCart = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      const updatedTotalPrice = totalPrice - item.price;
  
      setCart(updatedCart);
      setTotalPrice(updatedTotalPrice);
    }
  };

  const toggleCart = () => {
    document.querySelector('.cart-container').classList.toggle('show');
  };

  const checkout = () => {
    setCart([]);
    setTotalPrice(0);
    toggleCart();
  };

  return (
    <div>
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <header>
        <nav>
          <ul>
              <li><a href="#menu-sction">เมนูแนะนำ</a></li>
              <li><a href="#main-dishes">อาหารจานเดี่ยว</a></li>
              <li><a href="#snacks">ของทานเล่น</a></li>
              <li><a href="#drinks">น้ำ</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="menu-sction" className="menu-section">
          <h2>เมนูแนะนำ</h2>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
        <section id="main-dishes" className="menu-section">
          <h2>อาหารจานเดี่ยว</h2>
          <div className="menu-items">
            {menumain.map((item, index) => (
              <MenuItem key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
        <section id="snacks" className="menu-section">
          <h2>ของทานเล่น</h2>
          <div className="menu-items">
            {menusnack.map((item, index) => (
              <MenuItem key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
        <section id="drinks" className="menu-section">
          <h2>น้ำ</h2>
          <div className="menu-items">
            {menudrink.map((item, index) => (
              <MenuItem key={index} item={item} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>
      <Cart cart={cart} totalPrice={totalPrice} checkout={checkout} toggleCart={toggleCart} deleteCart={deleteCart} />
    </div>
  );
};

export default HomePage;
