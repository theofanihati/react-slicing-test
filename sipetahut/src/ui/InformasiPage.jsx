import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Informasi = () => {

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Navbar activePage="Informasi" />
      <Footer />
    </div>
  );
}     

export default Informasi;