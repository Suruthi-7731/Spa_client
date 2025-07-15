import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Modal = ({ type, closeModal, onLoginSuccess }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={closeModal}>×</button>
        {type === 'login' ? <Login closeModal={closeModal} onLoginSuccess={onLoginSuccess} /> :
         <Signup closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Modal;
