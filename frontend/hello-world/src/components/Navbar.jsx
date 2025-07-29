import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
         
          <img src="/images/logo.jpg" alt="Logo" className="logo-img" />
           <label className="logo-text">CODECORDS</label>
        </div>

        {/* 👇 Combine heading and hamburger */}
        <div className="navbar-right">
          <div className="navbar-center">
            <h2>GHAR KI KHETI</h2>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link className="actions" to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className="actions" to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link className="actions" to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link className="actions" to="/contacts" onClick={closeMenu}>Contacts</Link></li>
          <li><Link className="actions" to="/products" onClick={closeMenu}>Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
