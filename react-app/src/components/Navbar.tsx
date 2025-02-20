import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">PhishShield AI</h1>
          </div>
        </Link>
        

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/dashboard" className="text-blue hover:underline">
            Dashboard
          </Link>
          <Link to="/login" className="text-blue hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;