import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Logo from "../assets/logo512.png";

function Container() {
  return (
    <div>
      <Header icon={Logo} />
      <hr
        style={{
          opacity: 0.5,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Container;
