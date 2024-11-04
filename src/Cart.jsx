import React, { useState } from 'react';

const Cart = ({ cart, toggleCart, deleteCart, checkout }) => {
  const [showModal, setShowModal] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false); // Track checkout status

  // Calculate total price based on items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => {
    setIsCheckedOut(true); // Set checkout status to checked out
  };

  const handleCheckout = () => {
    clearCart(); // Clear cart items
    setShowModal(true); // Show modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setIsCheckedOut(false);
    checkout(); // Reset status for new orders
  };


  return (
    <div className="cart-container">
      <h2>ตะกร้าของคุณ</h2>
      <ul>
        {isCheckedOut ? (
          <li>ออเดอร์ของคุณกำลังมา!!</li>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} บาท (จำนวน: {item.quantity})
              <button onClick={() => deleteCart(item)}>ลบ</button>
            </li>
          ))
        )}
      </ul>
      <p>ราคาทั้งหมด: <span>{totalPrice}</span> บาท</p>
      <button onClick={toggleCart}>ปิด</button>
      <button onClick={handleCheckout}>สั่งซื้อ</button>

      {showModal && (
        <div className="modal">
          <div className='successcart'>
            <div className="modal-content">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png" alt="successcart" />
            <p>สั่งออเดอร์สำเร็จ!</p>
            <button onClick={handleCloseModal}>กลับไปที่หน้าแรก</button>
          </div>
        </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
        .close {
          cursor: pointer;
          float: right;
          font-size: 20px;
        }
        .successcart img {
          height: 60px;
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default Cart;
