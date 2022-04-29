import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
      <nav className="navbar">
        <Link to="/" className="logo"><img src="./icons/deathstar.png" alt="Death Star Icon" /></Link>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
    <div className="menu">
      <ul className="list">
        <li>
          <Link to="/characters">
          <img src="./icons/vader.png" alt="Darth Vader icon" />Characters
          </Link>
        </li>
        <li>
          <Link to="/movies">
          <img src="./icons/r2d2.png" alt="R2D2 icon" />Movies
          </Link>
        </li>
        <li>
          <Link to="/planets">
          <img src="./icons/falcon.png" alt="Millenium Falcon icon" />Planets
          </Link>
        </li>
        <li>
          <Link to="/about">
          <img src="./icons/c3po.png" alt="C3PO icon" />About
          </Link>
        </li>
      </ul>
    </div>
      </nav>

  );
};

export default Navbar;
