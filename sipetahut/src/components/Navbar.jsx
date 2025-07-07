import React, { useState } from 'react';
import Logo from '../assets/logo_prov_lampung.png';
import Profpic from '../assets/mock_profile_picture.png';
import SmallButton from './SmallButton';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import ProfileDropdown from './ProfileDropdown';

const navLinks = [
  { name: 'Beranda', href: '#' },
  { name: 'Kontak', href: '#' },
  { name: 'Informasi', href: '#' },
];

// DUMMY LOGIN PETANI
const loggedInUser = {
  name: 'Tepani Canzz',
  profilePic: Profpic,
};

export default function Navbar({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State simpan data user, null = belum login, dah login = loggedInUser
  const [user, setUser] = useState(loggedInUser);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // --- SIMULASI LOGIN BLM ---
  const handleLogin = () => setUser(loggedInUser);
  const handleLogout = () => {
    setUser(null);
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
  };
  // ------------------------------------

  return (
    <nav className="bg-dark_green shadow-md sticky top-0 z-50">
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-[120px]">
        <a href="#" className="flex-shrink-0 flex items-center">
          <img src={Logo} alt="Logo Provinsi Lampung" className="h-8 mr-3" />
          <span className="text-white font-bold text-xl tracking-wider">
            SIPETAHUT Lampung
          </span>
        </a>

        {/* Desktop - Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = link.name === activePage;
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-brown transition-colors duration-300"
              >
                <span>{link.name}</span>
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-brown
                    transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* Desktop - Masuk atau Profil */}
        <div className="hidden md:block">
          {user ? (
            <ProfileDropdown user={user} onLogout={handleLogout} />
          ) : (
            <SmallButton text="Masuk" onClick={handleLogin} />
          )}
        </div>

        {/* Mobile - Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile - Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark_green px-4 pb-4 ">
          <div className="space-y-2">
            {navLinks.map((link) => {
            const isActive = link.name === activePage;
            return (
              <div key={link.name} className="flex justify-center">
                <a
                  href={link.href}
                  className={`relative inline-flex flex-col items-center py-2 px-4 
                    font-medium transition-colors duration-300 text-white hover:text-brown
                  `}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute -bottom-0 w-4/5 h-0.5 bg-brown rounded-full
                      transition-transform duration-300
                      ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  ></span>
                </a>
              </div>
            );
          })}
          </div>

          <div className="my-4 border-t border-white/10"></div>
          {/* User Account */}
          <div>
            {user ? (
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center p-2 rounded-lg"
                >
                  <img src={user.profilePic} alt="Profil" className="h-10 w-10 rounded-full object-cover items-center space-x-3" />
                  <FiChevronDown 
                    className={`text-white transition-transform duration-300 ${isProfileMenuOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Sub-Nav extended profpic */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isProfileMenuOpen ? 'max-h-40' : 'max-h-0'}
                  `}
                >
                  <div className="pt-2 space-y-2">
                    <a href="#" className="block text-center text-white/80 hover:text-brown p-2">Profil</a>
                    <a href="#" className="block text-center text-white/80 hover:text-brown p-2">Dashboard</a>
                    <button onClick={handleLogout} className="block w-full text-center text-white/80 hover:text-brown p-2">
                      Keluar
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <SmallButton text="Masuk" />
            )}
          </div>
        </div>
      )}
    </nav>
  );
}