import React from "react";
import { Link } from "react-router-dom";
import "./anasayfa.css";

const Anasayfa = () => {
  return (
    <div className="main">
      <div className="anasayfa-icerik">
        <br />
        <p>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </p>

        <Link id="order-pizza" className="orderPizza" to="/pizza">
          ACIKTIM
        </Link>
      </div>
    </div>
  );
};

export default Anasayfa;
