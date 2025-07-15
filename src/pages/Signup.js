import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation Functions
  const validateEmail = (email) => {
    const regex = /^[\w.%+-]+@[a-zA-Z\d.-]+\.(com|in)$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    return regex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!validateEmail(email)) newErrors.email = 'Invalid email (must end with .com or .in)';
    if (!validatePhone(phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!validatePassword(password)) {
      newErrors.password =
        'Password must be 6-10 characters with at least 1 uppercase and 1 lowercase letter';
    }
    if (password !== rePassword) newErrors.rePassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send request
    try {
      await axios.post('http://localhost:5050/fullstack/signup', {
        name,
        email,
        phone,
        password
      });
      alert('Signup successful');
      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type="password"
          placeholder="Re-enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {errors.rePassword && <p className="error">{errors.rePassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
