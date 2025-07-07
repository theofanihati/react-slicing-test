import React, { useState } from 'react';
import Logo from '../assets/logo_prov_lampung.png';
import SmallButton from './SmallButton';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Beranda', href: '#' },
  { name: 'Kontak', href: '#' },
  { name: 'Informasi', href: '#' },
];

export default function Navbar({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark_green shadow-md sticky top-0 z-50">
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-[120px]">
        
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo Provinsi Lampung" className="h-8 mr-3" />
            <span className="text-white font-bold text-md tracking-wider">
              SIPETAHUT Lampung
            </span>
          </a>
        </div>

        {/* Nav Desktop */}
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

        {/* Button Masuk Desktop */}
        <div className="hidden md:block">
          <SmallButton text="Masuk" type="submit" />
        </div>

        {/* Button Hamburger Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Nav Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark_green px-4 pb-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = link.name === activePage;
            return (
              <div key={link.name} className="flex justify-center">
                <a
                  href={link.href}
                  className={`relative inline-flex flex-col items-center py-2 px-4 
                    font-medium transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-white hover:text-brown'}
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
          <div className="pt-4 flex justify-center">
            <SmallButton text="Masuk" type="submit" />
          </div>
        </div>
      )}
    </nav>
  );
}