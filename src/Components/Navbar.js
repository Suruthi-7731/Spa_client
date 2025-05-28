import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Spa & Wellness</div>
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={() => openModal('login')}>Login</button>
        <button onClick={() => openModal('signup')}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
