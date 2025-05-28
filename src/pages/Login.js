import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  // Show Signup component if user clicks "Sign up"
  if (signup) {
    return <Signup />;
  }

  function handlePost1() {
    axios
      .post('http://localhost:5000/fullstack/login', {
        email: email1,
        password: password1
      })
      .then(() => {
        alert('Logged in!');
        setEmail1('');
        setPassword1('');
        navigate('/home');
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          console.error(err);
          alert('Login failed. Please try again.');
        }
      });
  }

  // ✅ Render Login Form
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Login Page</h2>

        <label htmlFor='Email'>Email: </label>
        <br />
        <input
          type='text'
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
        />
        <br />

        <label htmlFor='pass'>Password: </label>
        <br />
        <input
          type='password'
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <br />

        <button onClick={handlePost1}>Submit</button>

        <div className='register'>
          <p>
            Create a new account{' '}
            <span
              style={{
                color: 'blue',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
              onClick={() => setSignup(true)}
            >
              Sign-up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
