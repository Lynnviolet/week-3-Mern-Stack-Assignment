import React from 'react';
import classNames from 'classnames';

const Button = ({ children, variant = 'primary', ...props }) => {
  const base = 'px-4 py-2 rounded font-medium focus:outline-none transition';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={classNames(base, variants[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
