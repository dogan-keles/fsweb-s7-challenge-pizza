import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="body">
      <div className="content">
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

export default Home;
