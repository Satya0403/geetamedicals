import React, { useState } from "react";
import { FaBars, FaTimes, FaCapsules } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaCapsules className="logo-icon" />
        <span>Geeta Medicals</span>
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
