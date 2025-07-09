import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} React Task App. All rights reserved.
    </footer>
  );
};

export default Footer;
