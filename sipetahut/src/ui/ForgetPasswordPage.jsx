import React, { useState } from 'react';

import logo from '../assets/logo_prov_lampung.png'; 
import background from '../assets/pine_forest_background.png'; 
import { FiUser} from 'react-icons/fi';
import Button from '../components/Button';
import TextField from '../components/TextField';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [showEmail, setShowEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    alert(`Permintaan reset password telah dikirim ke: ${email}`); //TODO: alert-success pengiriman email
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

        <h3 className="text-white mb-1 text-center">Silahkan masukkan email</h3>                    
          <TextField
            type={showEmail ? 'text' : 'email'}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<FiUser />}
            required
          />

          <Button text="Kirim" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;