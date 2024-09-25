// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormContainer from './components/FormContainer';
import './styles/global.css';

// Import new pages
import Register from './pages/Register';
import Login from './pages/Login';
import Category from './pages/Category';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Registration Form</h1>
          <Routes>
            <Route exact path="/" component={FormContainer} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/category" component={Category} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
