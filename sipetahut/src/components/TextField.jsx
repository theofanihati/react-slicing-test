import React from 'react';

const TextField = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
  onRightIconClick,
  required = false
}) => {
  return (
    <div className="relative mb-5 w-full">
      {/* Ikon Kiri */}
      {leftIcon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200">
          {leftIcon}
        </div>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-full bg-white/30 py-1 pl-12 pr-12 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        required={required}
      />
        {/* Ikon Kanan */}
      {rightIcon && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-200"
          onClick={onRightIconClick}
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

export default TextField;