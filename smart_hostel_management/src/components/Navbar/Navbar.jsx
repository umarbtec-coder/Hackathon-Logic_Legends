import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, AlertCircle } from "lucide-react";
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

        <div className="navbar-links">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/features" className="nav-link" onClick={closeMenu}>
            Features
          </Link>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="navbar-actions">

          <Link
            to="/complaints"
            className="complaint-btn"
            onClick={closeMenu}
          >
            <AlertCircle size={16} />
            Raise Complaint
          </Link>

          <Link to="/login" className="login-btn" onClick={closeMenu}>
            Login
          </Link>

          <Link
            to="/register"
            className="get-started-btn"
            onClick={closeMenu}
          >
            Get Started
            <ArrowRight size={17} />
          </Link>

        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/features" onClick={closeMenu}>
          Features
        </Link>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <Link
          to="/complaints"
          className="mobile-complaint"
          onClick={closeMenu}
        >
          <AlertCircle size={17} />
          Raise Complaint
        </Link>

        <div className="mobile-actions">

          <Link
            to="/login"
            className="mobile-login"
            onClick={closeMenu}
          >
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