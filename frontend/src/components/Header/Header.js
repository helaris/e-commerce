import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DarkLogo from "../../images/dark-logo.png";
import LightLogo from "../../images/light-logo.png";
import "./Header.css";

const Header = ({ cartCount }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <header className={`header__container ${show && "nav__black"}`}>
      <div className="logo">
        {show ? (
          <Link to="/">
            <img src={LightLogo} alt="light logo" />
          </Link>
        ) : (
          <Link to="/">
            <img src={DarkLogo} alt="dark logo" />
          </Link>
        )}
      </div>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/cart">
              CART
              <FaShoppingCart />({cartCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
