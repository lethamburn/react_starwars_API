import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
      <nav className="navbar">
        <Link to="/" className="logo">LOGO</Link>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
    <div className="menu">
      <ul className="list">
        <li>
          <Link to="/characters">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/movies">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/planets">
            Planets
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
      </nav>

  );
};

export default Navbar;
