import React from "react";
import "./Header.css";
import Logo from "./Repify.png";
import { Link } from "react-router-dom";

const Header = ({ handleSignup, handleLogin }) => {
  return (
    <div className="Header">
      <nav className="nav navBar"> 
        <Link to="/">
          <img src={Logo} className="logo" alt="Repify" />
        </Link>
        <ul className="navItems">
          <li className="navLink">
            <Link className="links" onClick={handleLogin} to="/login">
              Login
            </Link>
            <Link className="links" onClick={handleSignup} to="/register">
              Sign
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
