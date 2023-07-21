import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="body">
      <div className="content">
        <img src="Assets/logo.svg" alt="" />
        <h1>Teknolojik Yemekler</h1>
        <br />
        <p>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </p>

        <Link id="order-pizza" className="orderPizza" to="/OrderForm">
          ACIKTIM
        </Link>
      </div>
    </div>
  );
};

export default Home;
