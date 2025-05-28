import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    function handlePost(){
        axios.post("http://localhost:5000/fullstack/",{name, email, password})
        .then(() => {
          alert("Data has been posted")
          setEmail('')
          setName('')
          setPassword('')
          navigate('/login')
        })
        .catch((err) => {
          console.error(err);
        })
    }
  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Sign-Up Page</h2>
        <label htmlFor='Name'>Name: </label><br/>
        <input type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label htmlFor='Email'>Email: </label><br/>
        <input type='text'value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <label htmlFor='pass'>Password: </label><br/>
        <input type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button onClick={handlePost}>Submit</button>
      </div>
    </div>
  )
}

export default Signup