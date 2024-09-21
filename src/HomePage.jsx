import React, { useState } from 'react';
import Header from './Header';
import MenuItem from './MenuItem';
import Cart from './Cart';

const menuItems = [
  { name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
  { name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
  { name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
  { name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
  { name: 'เสต๊กเนื้อ', price: 120, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
];

const menumain = [
    { name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
    { name: 'หมี่กรอบผัดซีอิ๊ว', price: 60, image: 'https://img.wongnai.com/p/l/2017/11/27/de6df13f67284c978aca21e3a0c52218.jpg' },
    { name: 'ก๋วยเตี๋ยวคั่วไก่', price: 70, image: 'https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2017/03/29/a3b7af34297c416e90e9c1694ffd206c.jpg' },
    { name: 'สุกี้แห้งไก่', price: 60, image: 'https://img.wongnai.com/p/l/2017/05/29/6988f264122945718442c9e258babdcb.jpg' },
    { name: 'ข้าวหมูแดง', price: 60, image: 'https://img.wongnai.com/p/1920x0/2018/07/03/ed7ed753c9f5433fa1afa1a3bfb83796.jpg' },
    { name: 'ข้าวหมูแดงหมูกรอบ', price: 75, image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5FZX9z21BD6BkebjldCkR4f9gV00c9oK5ObfveJSI516A5C0jFDXvC.webp' },
    { name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
    { name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
    { name: 'เสต๊กเนื้อ', price: 100, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
    { name: 'ข้าวผัดอเมริกัน', price: 115, image: 'https://img.wongnai.com/p/l/2017/05/29/8516e11c77244de6a5f6ac74faa138c5.jpg' },
    { name: 'ข้าวหน้าหมูทอด', price: 65, image: 'https://img.wongnai.com/p/1920x0/2018/05/25/bc59677defba440b9d6a4507b903df65.jpg' },
    { name: 'ข้าวยำไก่แซ่บ', price: 65, image: 'https://img.wongnai.com/p/1920x0/2020/11/07/95ce4ec6055a4e02a650c1c58dd41849.jpg' },
    { name: 'หอยทอด', price: 75, image: 'https://img.wongnai.com/p/l/2017/05/29/5309d0a9b15d4907b6389b6a6787fc7e.jpg' },
    { name: 'ข้าวน้ำพริกกะปิปลาทู', price: 75, image: 'https://img.wongnai.com/p/1920x0/2018/03/01/a47f84a3a653472cb86d4874ac22e2fe.jpg' },
  { name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
];

const menusnack =
[
    { name: 'นักเก็ต', price: 50, image: 'https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30191243/051052534_F.jpg' },
    { name: 'ไก่ทอด', price: 30, image: 'https://i.ytimg.com/vi/60xSNZvr7Ck/maxresdefault.jpg' },
    { name: 'ไส้กรอกทอด', price: 40, image: 'https://fit-d.com/uploads/food/16cca95edc9ab6185c8720bed16ae178.jpg' },
    { name: 'ไก่จ๊อ', price: 45, image: 'https://www.sgethai.com/wp-content/uploads/2022/09/220908-Content-%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%88%E0%B9%8A%E0%B8%AD02.webp' },
    { name: 'ชีสบอล', price: 40, image: 'https://i.ytimg.com/vi/2Sdsm37ID5Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2gtZijNMm8apP57QFeRD_dduotQ' },
];

const menudrink =
[
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://yalamarketplace.com/upload/1658399714294.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
   { name: 'น้ำเก๊กฮวย', price: 45, image: 'https://f.ptcdn.info/343/079/000/rn73ea11ekAkF7q758J9-o.jpg' },
]

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
      <nav>
        <ul>
            <li><a href="#menu-sction">เมนูแนะนำ</a></li>
            <li><a href="#main-dishes">อาหารจานเดี่ยว</a></li>
            <li><a href="#snacks">ของทานเล่น</a></li>
            <li><a href="#drinks">น้ำ</a></li>
        </ul>
        </nav>
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
      <Cart cart={cart} totalPrice={totalPrice} checkout={checkout} toggleCart={toggleCart} />
    </div>
  );
};

export default HomePage;
