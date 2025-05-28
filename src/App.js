import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Modal from './Components/Modal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
const [modalType, setModalType] = useState(null);

const openModal = (type) => setModalType(type); // 'login' or 'signup'
const closeModal = () => setModalType(null);

return (
<div className="app">
{/* Navbar with modal trigger */}
<Navbar openModal={openModal} />
 <main>
    <Routes>
      {/* Default route shows Signup */}
      <Route path="/" element={<Signup />} />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* Other static pages */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>

  {/* Footer */}
  <Footer />

  {/* Conditional modal rendering */}
  {modalType && <Modal type={modalType} closeModal={closeModal} />}
</div>
);
};

export default App;