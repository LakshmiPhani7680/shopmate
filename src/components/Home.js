import React from "react";
import JBL_tunes from "../assets/JBL_tunes.jpeg";
import Boat_LifeStyle from "../assets/boat_lifestyle.jpeg";
import Noise from "../assets/noise_4.jpeg";
import Zebronics from "../assets/zebronics_Zeb.jpg";
import Cosmic_byte from "../assets/cosmic_byte.jpeg";
import beats_solo3 from "../assets/beats_solo3.jpeg";
export default function Home() {
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
    {
      id: 3,
      name: "Noise",
      img: Noise,
      price: 200,
    },
    {
      id: 4,
      name: "Zebronics",
      img: Zebronics,
      price: 200,
    },
    {
      id: 5,
      name: "Cosmic byte",
      img: Cosmic_byte,
      price: 200,
    },
    {
      id: 6,
      name: "beats_solo3",
      img: beats_solo3,
      price: 200,
    },
  ];
  return (
    <div className="card-container">
      {headPhones.map((headphone) => (
        <div className="card" key={headphone.id}>
          <img src={headphone.img} alt={headphone.name} />
          <h3
            id="title"
            style={{
              alignSelf: "flex-start",
            }}
          >
            {headphone.name}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <p
              style={{
                justifySelf: "start",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              ${headphone.price}
            </p>
            <button
              style={{
                justifySelf: "end",
              }}
              id="add-to-cart-btn"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
