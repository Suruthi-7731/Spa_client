import React, { useEffect, useState } from 'react';
import './css/YourCart.css';
import axios from 'axios';

const YourCart = ({ userEmail }) => {
  const [cart, setCart] = useState([]);
const removeItem = async (id) => {
  try {
    await axios.delete(`http://localhost:5050/cart/remove/${id}?userEmail=${userEmail}`);
    setCart((prev) => prev.filter((item) => item._id !== id));
  } catch (err) {
    console.error('Error removing item:', err);
  }
};


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/cart?userEmail=${userEmail}`);
        setCart(res.data);
      } catch (err) {
        console.error('Error fetching cart:', err);
      }
    };

    if (userEmail) fetchCart();
  }, [userEmail]); 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Offer: {item.offer}</p>
                <p>{item.description}</p>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourCart;
