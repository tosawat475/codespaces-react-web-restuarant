import React, { useEffect, useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import Cart from './Cart';
import axios from 'axios';

const HomePage = () => {
  const MENU_URL = "http://localhost:5000";      // backend เดิม
  const CATEGORY_URL = "http://localhost:6001"; // category microservice

  
  const [menuItems, setMenuItems] = useState([]);
  const [menumain, setMenumain] = useState([]);
  const [menusnack, setMenusnack] = useState([]);
  const [menudrink, setMenudrink] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ดึงข้อมูลสำหรับแต่ละเมนู
  useEffect(() => {
    axios.get(`${MENU_URL}/api/menuItem`)
      .then(response => setMenuItems(response.data))
      .catch(error => console.log("Error fetching menu items:", error));
  }, []);

  useEffect(() => {
    axios.get(`${CATEGORY_URL}/api/categories/main`)
      .then(res => setMenumain(res.data))
      .catch(() => setMenumain([]));
  }, []);

  useEffect(() => {
    axios.get(`${CATEGORY_URL}/api/categories/snack`)
      .then(res => setMenusnack(res.data))
      .catch(() => setMenusnack([]));
  }, []);

  useEffect(() => {
    axios.get(`${CATEGORY_URL}/api/categories/drink`)
      .then(res => setMenudrink(res.data))
      .catch(() => setMenudrink([]));
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
