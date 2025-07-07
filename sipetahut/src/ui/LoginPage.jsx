import React, { useState } from 'react';

import logo from '../assets/logo_prov_lampung.png'; 
import background from '../assets/pine_forest_background.png'; 
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../components/Button';
import TextField from '../components/TextField';

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
            <img src={logo} alt="SIPETAHUT Lampung Logo" className="mb-4 w-12" />
            <h2 className="text-xl font-medium text-white">SIPETAHUT Lampung</h2>
          </div>

          <TextField
            name="username"
            placeholder="Username"
            leftIcon={<FiUser />}
            required
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<FiLock />}
            rightIcon={showPassword ? <FiEyeOff /> : <FiEye />}
            onRightIconClick={() => setShowPassword(!showPassword)}
            required
          />

          <Button text="Masuk" type="submit" />
        </form>
        <a href="#" className="mt-6 text-sm text-gray-200 hover:underline">
          Lupa password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;