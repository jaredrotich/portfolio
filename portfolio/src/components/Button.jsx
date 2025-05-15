
import React from 'react';
import '../styles/ButtonStyles.css';

const Button = ({ children, variant = 'filled', ...props }) => {
  const className = variant === 'outline' ? 'modern-button outline' : 'modern-button';
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
