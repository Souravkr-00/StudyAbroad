// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">StudyAbroad</span>
            <span className="logo-accent">Connect</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/colleges" className="nav-link">Colleges</a>
          </li>
          <li className="nav-item">
            <a href="/seminars" className="nav-link">Seminars</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact Us</a>
          </li>
        </ul>

        {/* Action buttons */}
        <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;