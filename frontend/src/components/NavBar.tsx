import React from 'react';
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/homework-helper" className="nav-item">Homework Helper</Link>
      <Link to="/about" className="nav-item">About</Link>
    </nav>
  );
};

export default NavBar;
