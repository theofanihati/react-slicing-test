import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function ProfileDropdown({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // when klik outside dropdown, tertutup
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={user.profilePic}
          alt="Foto Profil"
          className="h-10 w-10 rounded-full object-cover border-2 border-white/50"
        />
        <FiChevronDown className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profil Saya
          </a>
          <button
            onClick={onLogout}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Keluar
          </button>
        </div>
      )}
    </div>
  );
}