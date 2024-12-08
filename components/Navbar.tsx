"use client";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">School Manager</div>
      <nav className="hidden md:flex space-x-4">
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Dashboard</button>
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Reports</button>
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Settings</button>
      </nav>
    </header>
  );
};

export default Navbar;
