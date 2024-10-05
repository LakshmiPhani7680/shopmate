import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header({ icon }) {
  return (
    <header>
      <nav>
        <div className="nav-title">
          <Link to="/" id="nav-title">
            <img src={icon} alt="Logo" />
            <span id="navTitle">Shop Mate</span>
          </Link>
        </div>
        <div className="nav-buttons">
          <NavLink id="home-btn" to="/">
            Home
          </NavLink>
          <NavLink id="cart-btn" to="/cart">
            Cart
          </NavLink>
        </div>
        <div className="nav-cart-count">
          <Link id="nav-cart-count" to="/cart">
            <span>Cart: 2</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
