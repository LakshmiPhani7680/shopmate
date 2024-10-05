import React from "react";
import JBL_tunes from "../assets/JBL_tunes.jpeg";
import Boat_LifeStyle from "../assets/boat_lifestyle.jpeg";
export default function Cart() {
  const headPhones = [
    {
      id: 1,
      name: "JBL Tunes",
      img: JBL_tunes,
      price: 100,
    },
    {
      id: 2,
      name: "Boat Lifestyle",
      img: Boat_LifeStyle,
      price: 200,
    },
  ];
  return (
    <div
      className="cart-container"
      style={{
        margin: " 30px 0",
      }}
    >
      <h2>Cart Items: {headPhones.length}</h2>
      {headPhones.map((headPhone) => (
        <div className="cart-item" key={headPhone.id}>
          <img src={headPhone.img} alt={headPhone.name} />
          <h3>{headPhone.name}</h3>
          <p>${headPhone.price}</p>
          <button id="remove-from-cart">Remove</button>
        </div>
      ))}
    </div>
  );
}
