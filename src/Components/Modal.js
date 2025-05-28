import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Modal = ({ type, closeModal }) => {
  const renderContent = () => {
    if (type === 'login') return <Login />;
    if (type === 'signup') return <Signup />;
    return null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={closeModal}>×</button>
        {renderContent()}
      </div>

      <style>{`
  .modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-box {
    background-image: url('https://t4.ftcdn.net/jpg/06/81/55/65/360_F_681556574_u6CSpZEVuCmyxXrwzwTFxqAuQtNdVXWA.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(255, 255, 255, 0.8);
    color: #004d40;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;

      `}</style>
    </div>
  );
};

export default Modal;
