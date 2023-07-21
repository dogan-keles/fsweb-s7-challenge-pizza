import "./form.css";
import React from "react";

function Form(props) {
  const [size, setSize] = React.useState("S");
  const sizeChangeHandler = (e) => setSize(e.target.value);
  const [orderNote, setOrderNote] = React.useState();
  //const noteChangeHandler = (e) => setOrderNote(e.target.value);
  console.log("sipariş notu:", orderNote);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
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
            Orta
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
  );
}
export default Form;
