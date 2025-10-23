import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mt-4 text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}
