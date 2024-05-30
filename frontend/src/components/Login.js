import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import logo from './logo.png'; // Import the logo image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      // Store the token (you might use localStorage or cookies)
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard for both admin and user
      window.location.href = '/dashboard/admin'; // You might want to conditionally redirect based on user type
    } catch (err) {
      console.error(err);
      // Handle login errors (e.g., display an error message)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={logo} alt="Logo" />
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button-container">
            <button type="submit" className="login-button">Sign In</button>
            <button type="button" className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button> {/* Use useNavigate to navigate to signup */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;