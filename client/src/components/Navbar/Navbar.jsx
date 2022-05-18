import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Button from "../../layout/Button/Button";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Fade triggerOnce delay={2000}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="./icons/animated.gif" alt="Animated Millenium Falcon" />
        </Link>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i className="ri-menu-line"></i>
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <Link to="/characters">
               <Button sectionName="Characters"/>
              </Link>
            </li>
            <li>
              <Link to="/movies">
              <Button sectionName="Movies"/>
              </Link>
            </li>
            <li>
              <Link to="/planets">
              <Button sectionName="Planets" />
              </Link>
            </li>
            <li>
              <Link to="/timeline">
              <Button sectionName="Timeline"/>
              </Link>
            </li>
            <li>
              <Link to="/about">
              <Button sectionName="About"/>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fade>
  );
};

export default Navbar;
