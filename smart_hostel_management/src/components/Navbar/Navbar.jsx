import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

       
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">S</div>

          <div className="logo-text">
            <span>Smart</span>Hostel
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <a href="#features" className="nav-link">
            Features
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="get-started-btn">
            Get Started
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <div className="mobile-actions">
          <Link to="/login" className="mobile-login" onClick={closeMenu}>
            Login
          </Link>

          <Link
            to="/register"
            className="mobile-get-started"
            onClick={closeMenu}
          >
            Get Started
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;