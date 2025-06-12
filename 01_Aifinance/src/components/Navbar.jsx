import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* TrackNest aligned fully left */}
          <h1 className="text-white text-3xl font-bold ml-0">TrackNest</h1>
          
          {/* Navbar Links pushed right with more space */}
          <ul className="flex space-x-10 text-lg">
            <li>
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Features</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Dashboard</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;