// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormContainer from './components/FormContainer';
import Login from './pages/Login';
import Category from './pages/Category';
import './styles/global.css';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-lg">Home</Link>
        <div>
          <Link to="/login" className="px-4">Login</Link>
          <Link to="/" className="px-4">Register</Link>
          <Link to="/category" className="px-4">Category</Link>
        </div>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<FormContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/category" element={<Category />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
