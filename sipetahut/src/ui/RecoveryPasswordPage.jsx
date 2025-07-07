import React, { useState } from 'react';
import logo from '../assets/logo_prov_lampung.png'; 
import background from '../assets/pine_forest_background.png'; 
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from '../components/Button';
import TextField from '../components/TextField';

const RecoveryPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Password baru dan konfirmasi password tidak cocok!'); //TODO: allert-error
            return;
        }
        console.log('New Password:', newPassword);
        alert('Password berhasil diubah!'); //TODO: alert-success
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
                        type={showNewPassword ? 'text' : 'password'}
                        placeholder="Password Baru"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        leftIcon={<FiLock />}
                        rightIcon={showNewPassword ? <FiEyeOff /> : <FiEye />}
                        onRightIconClick={() => setShowNewPassword(!showNewPassword)}
                        required
                    />

                    <TextField
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Konfirmasi Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        leftIcon={<FiLock />}
                        rightIcon={showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                        onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        required
                    />

                    <Button text="Kirim" type="submit" />
                </form>
            </div>
        </div>
    );
}
export default RecoveryPasswordPage;