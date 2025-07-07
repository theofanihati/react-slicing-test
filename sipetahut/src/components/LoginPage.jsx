import React, { useState } from 'react';

import logo from '../assets/logo_prov_lampung.png'; 
import background from '../assets/pine_forest_background.png'; 
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Mencoba masuk dengan Username: ${username}`);
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl p-8">
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col items-center text-center">
            <img src={logo} alt="SIPETAHUT Lampung Logo" className="mb-4 w-20" />
            <h2 className="text-xl font-medium text-white">SIPETAHUT Lampung</h2>
          </div>

          {/* Textfield Username */}
          <div className="relative mb-5 w-full">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full rounded-full bg-white/30 py-3 pl-12 pr-4 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          {/* Textfield Password */}
          <div className="relative mb-6 w-full">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-full bg-white/30 py-3 pl-12 pr-12 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* Button Masuk */}
          <button
            type="submit"
            className="w-full rounded-full bg-[#C88A57] py-3 font-normal text-white transition-colors duration-300 hover:bg-[#AF7645]"
          >
            Masuk
          </button>
        </form>

        {/* Link Lupa Password */}
        <a href="#" className="mt-6 text-sm text-gray-200 hover:underline">
          Lupa password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;