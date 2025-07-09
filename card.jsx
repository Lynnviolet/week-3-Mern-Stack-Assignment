import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
