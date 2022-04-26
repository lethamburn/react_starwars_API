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
          <Link to="/">
              <div className="link">
                <img src="./icons/Star_Wars_Falcon.svg" alt="" />
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/">
              <div className="link">
                <p>Movies</p>
                <img src="./icons/Star_Wars_R2D2.svg" alt="" />
              </div>
            </Link>
          </li>
          <li>
          <Link to="/">
              <div className="link">
                <img src="./icons/Star_Wars_Storm-Trooper.svg" alt="" />
                <p>Characters</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="link">
                <p>Planets</p>
                <img src="./icons/Star_Wars_Death Star.svg" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Navbar;
