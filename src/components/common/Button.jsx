import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform inline-flex items-center justify-center cursor-pointer whitespace-nowrap active:scale-95 text-sm";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-[1.02]",
    secondary: "bg-transparent text-white border border-white/20 hover:bg-white/5",
    outline: "bg-transparent text-white border border-brand-primary/60 hover:bg-white/5 hover:border-brand-primary",
  };

  const currentVariant = variants[variant] || variant;

  return (
    <button 
      className={`${baseClasses} ${currentVariant} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
