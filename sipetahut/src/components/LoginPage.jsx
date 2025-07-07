import React, { useState } from 'react';
import './LoginPage.css';
import logo from '../assets/logo_prov_lampung.png';
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; //icons bawaan react yak ini, apa mau pake img kaya componen figma?

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO:  logika login
    const username = event.target.username.value;
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Mencoba masuk dengan Username: ${username}`);
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <img src={logo} alt="SIPETAHUT Lampung Logo" className="logo" />
          <h2 className="title">SIPETAHUT Lampung</h2>

          <div className="input-group">
            <FiUser className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>

          <div className="input-group">
            <FiLock className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button type="submit" className="login-button">
            Masuk
          </button>

          <a href="#" className="forgot-password-link">
            lupa password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;