import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ closeModal, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[\w.%+-]+@[a-zA-Z\d.-]+\.(com|in|edu)$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    return regex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validateEmail(email)) newErrors.email = 'Invalid email (must end with .com or .in)';
    if (!validatePassword(password)) {
      newErrors.password =
        'Password must be 6–10 characters with at least 1 uppercase and 1 lowercase letter';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post('http://localhost:5050/fullstack/login', { email, password });
      alert('Login successful');
      onLoginSuccess(email);
      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
