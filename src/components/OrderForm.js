import React from "react";
import "./OrderForm.css";
import PizzaForm from "./PizzaForm";
function OrderForm(props) {
  return (
    <header>
      <div className="header">
        Teknolojik Yemekler
        <br />
        <nav>
          <a href="/#">Ana Sayfa - </a>
          <a href="/#">Seçenekler - </a>
          <a href="/OrderForm">Sipariş Oluştur</a>
        </nav>
      </div>
      <PizzaForm {...props} />
    </header>
  );
}

export default OrderForm;
