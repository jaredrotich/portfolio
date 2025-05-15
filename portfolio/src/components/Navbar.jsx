
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/ButtonStyles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Code Warrior ⚔️</h2>
      <div className="nav-links">
        <NavLink to="/" className="modern-button outline">
          Home
        </NavLink>
        <NavLink to="/about" className="modern-button outline">
          About
        </NavLink>
        <NavLink to="/projects" className="modern-button outline">
          Projects
        </NavLink>
        <NavLink to="/contact" className="modern-button outline">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
