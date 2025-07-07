import React from 'react';

const Button = ({ text, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-full bg-[#9B663C] py-2 font-normal text-white transition-colors duration-300 hover:bg-[#AF7645]"
    >
      {text}
    </button>
  );
};

export default Button;