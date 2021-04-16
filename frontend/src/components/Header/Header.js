import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
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
