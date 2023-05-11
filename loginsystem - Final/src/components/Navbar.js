import React from 'react';
import './style/Nav.css';

function Navbar() {
  return (
    // Navigation bar element
    <nav>
      {/* Unordered list for navigation links */}
      <ul>
        {/* Logo display */}
        <div className='logoDisplay'></div>
        {/* Navigation links */}
        <li><a href="">Home</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">MENU & PRICING</a></li>
        <li><a href="">MASTER CHEFS</a></li>
        <li><a href="">PAGES</a></li>
      </ul>
    </nav>
  );
}

// Exporting Navbar component as default
export default Navbar;
