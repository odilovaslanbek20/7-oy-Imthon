// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="text-white bg-green-500 hover:bg-green-600 py-2 px-6 rounded-lg font-medium transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
