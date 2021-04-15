import React from "react";
import { Link } from "react-router-dom";
// import { FaCartArrowDown } from "react-icons/fa";
import "./Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header__container">
      <nav className="nav__container">
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
        <ul className="nav__links">
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/cart">CART({cartCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
