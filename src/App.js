import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import CategoryList from './CategoryList';
import ProductDisplay from './ProductDisplay';
import YourCart from './YourCart';
import './css/App.css';

const App = () => {
  const [modalType, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [cart, setCart] = useState([]);


  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]);
    setUserEmail('');
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <Router>
      <Navbar openModal={openModal} isLoggedIn={isLoggedIn} handleLogout={handleLogout} cartCount={cart.length} />
      {modalType && (
        <Modal type={modalType} closeModal={closeModal} onLoginSuccess={handleLoginSuccess} />
      )}
      <Routes>
        <Route path="/" element={isLoggedIn ? <CategoryList /> : <div className="welcome-message">Please login to view products.</div>} />
        <Route path="/category/:categoryName" element={<ProductDisplay userEmail={userEmail} addToCart={addToCart} />} />
        <Route path="/cart" element={<YourCart userEmail={userEmail} />} />
      </Routes>
    </Router>
  );
};

export default App;