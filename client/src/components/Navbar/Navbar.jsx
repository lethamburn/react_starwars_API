import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <Menu>
      <nav>
        <ul className="item-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/">Planets</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Navbar;
