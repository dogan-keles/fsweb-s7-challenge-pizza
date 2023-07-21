import React from "react";
import "./Pizza.css";
import Form from "./form";

function Pizza() {
  const [size, setSize] = React.useState("S");
  const sizeChangeHandler = (e) => setSize(e.target.value);
  const [orderNote, setOrderNote] = React.useState();
  //const noteChangeHandler = (e) => setOrderNote(e.target.value);
  console.log("sipariş notu:", orderNote);

  const [thickness, setThicknes] = React.useState();
  return (
    <div>
      <header>
        <div className="header">
          <nav>
            <a href="/#">Ana Sayfa - </a>
            <a href="/#">Seçenekler - </a>
            <a href="/Pizza">Sipariş Oluştur</a>
          </nav>
        </div>
        {/* <PizzaForm {...props} /> */}
      </header>
      <div className="pizzaBody">fslfdsk</div>
      <div className="pizza-name">
        <p>Position Absolute Acı Pizza</p>
      </div>

      <div className="pizza-price">
        <h2>85.50₺</h2>
        <div className="pizza-rate">
          <p>4.9</p>
        </div>{" "}
        <div className="pizza-stock">
          <p>(200)</p>
        </div>
      </div>
      <div>
        <p>
          Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <hr />
      <br />
      <Form
        size={size}
        sizeChangeHandler={sizeChangeHandler}
        thickness={thickness}
        setThicknes={setThicknes}
        orderNote={orderNote}
        setOrderNote={setOrderNote}
      />
    </div>
  );
}
export default Pizza;
