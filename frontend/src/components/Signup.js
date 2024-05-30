import React, { useState } from 'react';
import './Signup.css';
import logo from './logo.png'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
          email,
          gender,
        }),
      });

      if (response.status === 201) {
        console.log('Signup successful!');
        window.location.href = '/login';
        alert('Signup successful! Please login.');
      } else {
        const data = await response.json();
        console.error('Signup failed:', data);
        alert('Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="Logo" /> 
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="gender-options">
            <label htmlFor="gender">Gender</label>
            <input type="radio" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="female">Female</label>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;