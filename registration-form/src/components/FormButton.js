import React from 'react';

const FormButton = ({ type, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    {children}
  </button>
);

export default FormButton;
