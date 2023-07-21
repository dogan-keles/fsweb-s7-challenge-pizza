import React from "react";
import "./PizzaForm.css";
function PizzaForm(props) {
  return (
    <div className="pizza-order">
      <div className="pizza-info">
        <h3>Position Absolute Acı Pizza</h3>
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
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>
      <form id="pizza-form" onSubmit>
        {/* SIZE */}{" "}
        <div className="col-2">
          <div>
            <p>Boyut Seç *</p>
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="S"
                checked={props.size === "S"}
              />
              Küçük
            </label>
            <br />
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="M"
                checked={props.size === "M"}
              />
              Ortaa
            </label>
            <br />
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="L"
                checked={props.size === "L"}
              />
              Büyük
            </label>
          </div>
          {/* THICKNESS */}
          <select
            id="lang"
            onChange={(e) => props.setThicknes(e.target.value)}
            value={props.thickness}
          >
            <option value="default">-Hamur Kalınlığı Seç-</option>
            <option value="ince">İnce</option>
            <option value="kalin">Normal</option>
          </select>
        </div>
      </form>
      <form onSubmit>
        <hr />
        {/* SIZE */}{" "}
        <div className="col-2">
          <div>
            <p>Ek Malzemeler</p>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="S"
                checked={props.size === "S"}
              />
              Küçük
            </label>
            <br />
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="M"
                checked={props.size === "M"}
              />
              Ortaa
            </label>
            <br />
            <label>
              <input
                onChange={props.sizeChangeHandler}
                type="radio"
                value="L"
                checked={props.size === "L"}
              />
              Büyük
            </label>
          </div>
          {/* THICKNESS */}
          <select
            id="lang"
            onChange={(e) => props.setThicknes(e.target.value)}
            value={props.thickness}
          >
            <option value="default">-Hamur Kalınlığı Seç-</option>
            <option value="ince">İnce</option>
            <option value="kalin">Normal</option>
          </select>
        </div>
        <br />
        <br />
      </form>
      <div className="order-note">
        <label>
          <h3>Sipariş Notu</h3>
          <input
            type="text"
            id="special-text"
            name="order_note"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={(e) => props.setOrderNote(e.target.value)}
          />
        </label>
      </div>
      <br />
    </div>
  );
}

export default PizzaForm;
