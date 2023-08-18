import React from "react";
import { useEffect } from "react";
import "./Success.css";
import { useLocation, useHistory } from "react-router-dom";
function Success() {
  const location = useLocation();
  const pizzaData = location.state && location.state.pizzaData;
  const history = useHistory();

  useEffect(() => {
    const navToPizzaPage = setTimeout(() => {
      if (!location.state || !location.state.pizzaData) {
        history.push("/pizza");
      }
    }, 5000);
  }, [history]);

  return (
    <div className="success">
      <h1>Pizza Sayfasına Yönlendiriliyorsunuz...</h1>
      {pizzaData && (
        <div>
          <p>
            TEBRİKLER!
            <br></br>
            SİPARİŞİNİZ ALINDI!
          </p>
          <h2>Sipariş Detayları:</h2>
          <p>Ad Soyad: {pizzaData.nameSurname}</p>
          <p>Pizza Boyutu: {pizzaData.pizzaSize}</p>
          <p>Hamur Kalınlığı: {pizzaData.pizzaThickness}</p>
          <p>Ek Malzemeler :{pizzaData.extras.join(", ")}</p>
          <p>Sipariş Notu: {pizzaData.orderNote}</p>
        </div>
      )}
    </div>
  );
}

export default Success;
