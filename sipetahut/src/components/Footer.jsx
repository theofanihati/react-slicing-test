import React from 'react';
import { FiPhone, FiMail, FiGlobe, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/logo_prov_lampung.png';

export default function Footer() {
  return (
    <footer className="bg-dark_green text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-[60px]">        
        <div className="mb-8">
          <div className="flex items-center">
            <img src={Logo} alt="Logo Sipetahut Lampung" className="h-8 mr-4" />
            <span className="text-white font-bold text-xl">SIPETAHUT Lampung</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">          
          {/* Kontak 2/3*/}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold tracking-wider mb-4">SEKRETARIAT</h3>
            <div className="space-y-3">
              <p>
                Jalan Zaenal Abidin Pagar Alam, Rajabasa, Kota Bandar Lampung, Lampung 35141
              </p>
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 mr-3" />
                <span>(0721) 703177</span>
              </div>
              <div className="flex items-center">
                <FiMail className="h-5 w-5 mr-3" />
                <span>dishut@lampungprov.go.id</span>
              </div>
              <div className="flex items-center">
                <FiGlobe className="h-5 w-5 mr-3" />
                <span>https://dishut.lampungprov.go.id/</span>
              </div>
            </div>
          </div>

          {/* Sosial Media 1/3 akhir */}
          <div>
            <h3 className="text-white font-semibold tracking-wider mb-4">SOSIAL MEDIA</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FiYoutube size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FiTwitter size={24} />
              </a>
            </div>
          </div>          
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-2 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © Copyright 2025. Dinas Kehutanan Provinsi Lampung. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}