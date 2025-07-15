import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ openModal, isLoggedIn, handleLogout, cartCount }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">E-Commerce Website</div>

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <button onClick={() => navigate('/cart')}>Your Cart ({cartCount})</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
