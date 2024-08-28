// src/App.js
import React from 'react';
import FormContainer from './components/FormContainer';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
