import React, { useState } from "react";
import "./Pizza.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button, Label, Input, FormFeedback, FormGroup } from "reactstrap";
import * as Yup from "yup";

function Pizza(props) {
  const itemList = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
    "Mantar",
  ];
  const pizzaDefaultPrice = 85.5;
  const [orderAmount, setOrderAmount] = useState(1);
  const [total, setTotal] = useState(pizzaDefaultPrice);
  const [addedItems, setAddedItems] = useState([]);
  const [isFormValid, setFormValid] = useState(false);
  const [pizzaData, setPizzaData] = useState({
    nameSurname: "",
    pizzaSize: "",
    pizzaThickness: "",
    extras: [],
    orderNote: "",
  });
  //////////////////////////////////////////
  const [errors, setErrors] = useState({});
  const [totalExtraCost, setTotalExtraCost] = useState(0);
  //////////////////////////////////////////////////////////
  const formSchema = Yup.object().shape({
    nameSurname: Yup.string()
      .required("Lütfen adınızı yazın.")
      .min(2, "Geçerli bir isim yazın."),
    pizzaSize: Yup.string().required("Lütfen pizza boyutu seçin."),
    pizzaThickness: Yup.string().required("Hamur kalınlığını seçin."),

    extras: Yup.array()
      .max(10, "En fazla 10 malzeme seçebilirsiniz.")
      .min(1, "Test ediyoruz"),
    orderNote: Yup.string(),
  });
  /////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////
  function orderAmountDec() {
    if (orderAmount > 1) {
      setOrderAmount(orderAmount - 1);
    } else {
      alert("Lütfen sipariş etmek istediğiniz pizza adedini seçiniz");
    }
    // console.log("Sipariş adeti azaltıldı!");
  }
  function orderAmountInc() {
    setOrderAmount(orderAmount + 1);
    //console.log("Sipariş adeti arttırıldı!");
  }
  function calculated() {
    const newExtraCost = addedItems.length * 5;

    setTotalExtraCost(newExtraCost * orderAmount);

    setTotal((pizzaDefaultPrice + newExtraCost) * orderAmount);
  }
  ///////////////////////////////////////////////////////////////////////////////////////

  function validateForm(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  //////////////////////////////////////////////////////
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newExtras = [];

      if (checked === true) {
        newExtras = [...addedItems, e.target.value];
        setAddedItems(newExtras);
      } else {
        newExtras = addedItems.filter((item) => item !== e.target.value);
        setAddedItems(newExtras);
      }
      setPizzaData({
        ...pizzaData,
        extras: newExtras,
      });
      validateForm(name, newExtras);
    } else {
      setPizzaData({
        ...pizzaData,
        [name]: value,
      });
      validateForm(name, value);
    }
  }

  ////////////////////////////////////////////////////////////////
  useEffect(() => {
    formSchema.isValid(pizzaData).then((valid) => setFormValid(valid));
  }, [pizzaData]);

  /////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
  }
  ///////////////////////////////////////////////////////
  useEffect(() => {
    calculated();
  }, [orderAmount, pizzaData, addedItems]);

  //////////////////////////////////////////////////////
  return (
    <div className="pizza-order">
      <nav>
        <a href="/#">Ana Sayfa - </a>
        <a href="/#">Seçenekler - </a>
        <a href="/Pizza">Sipariş Oluştur</a>
      </nav>
      <div className="pizza-info">
        <h3>Position Absolute Acı Pizza</h3>
        <div className="pizza-price">
          <h2>{total}</h2>
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
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="col-2">
          <div>
            <FormGroup>
              <p>Boyut Seç *</p>
              <Label>
                <Input
                  onChange={handleChange}
                  type="radio"
                  value="S"
                  checked={pizzaData.pizzaSize === "S"}
                  name="pizzaSize"
                />
                Küçük
              </Label>
              <Label>
                <Input
                  onChange={handleChange}
                  type="radio"
                  value="M"
                  checked={pizzaData.pizzaSize === "M"}
                  name="pizzaSize"
                />
                Orta
              </Label>
              <br />
              <Label>
                <Input
                  onChange={handleChange}
                  type="radio"
                  value="L"
                  checked={pizzaData.pizzaSize === "L"}
                  name="pizzaSize"
                />
                Büyük
              </Label>
            </FormGroup>
          </div>
          <FormGroup>
            <Label>
              <Input
                type="select"
                id="thickness"
                name="pizzaThickness"
                onChange={handleChange}
                invalid={!!errors.pizzaThickness}
              >
                <option value="">-Hamur Kalınlığı Seç-</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
              </Input>
            </Label>
            {errors.pizzaThickness && pizzaData.pizzaThickness === "" && (
              <FormFeedback className="d-block mt-2">
                Hamur kalınlığını seçin.
              </FormFeedback>
            )}
          </FormGroup>
        </div>
        <br />
        <br />
        <FormGroup>
          {itemList.map((item, id) => (
            <div key={id} className="checkboxes">
              <Input
                type="checkbox"
                id={"checkBoxNo" + id}
                className="myCheckbox"
                name="extras"
                value={item}
                onChange={handleChange}
                invalid={!!errors.extras}
              />
              <Label htmlFor={"checkBoxNo" + id}> {item} </Label>
            </div>
          ))}
          {errors.extras && (
            <FormFeedback className="d-block mt-2">
              {errors.extras}
            </FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <h5>Ad Soyad</h5>
          <Label check htmlFor="name-input"></Label>
          <Input
            className="name-surname"
            id="name-input"
            name="nameSurname"
            placeholder="Ad Soyad Giriniz"
            type="text"
            onChange={handleChange}
            invalid={!!errors.nameSurname}
          />

          <FormFeedback>{errors.nameSurname}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <h5>Sipariş Notu</h5>
          <Label check htmlFor="special-text"></Label>
          <Input
            className="textarea"
            id="special-text"
            name="orderNote"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={handleChange}
          />
        </FormGroup>
        <br />
        <hr />
        <div className="amountAndCost">
          <div className="amount">
            <button onClick={orderAmountDec}>-</button>
            <p>{orderAmount}</p>
            <button onClick={orderAmountInc}>+</button>
          </div>
          <div className="cost">
            <h1>Sipariş Toplamı</h1>
            <p>Seçimler {totalExtraCost} TL</p>
            <p>Toplam {total} TL</p>{" "}
            <Link
              to={isFormValid ? "/success" : "#"}
              onClick={isFormValid ? undefined : (e) => e.preventDefault()}
            >
              <Button
                id="order-button"
                type="submit"
                onSubmit={handleSubmit}
                disabled={!isFormValid}
              >
                SİPARİŞ VER
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Pizza;
