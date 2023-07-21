import React from "react";
import OrderForm from "./components/OrderForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
const App = () => {
  //const [formData, setFormData] = useState({});
  const [size, setSize] = React.useState("S");
  const sizeChangeHandler = (e) => setSize(e.target.value);
  const [orderNote, setOrderNote] = React.useState();
  //const noteChangeHandler = (e) => setOrderNote(e.target.value);
  console.log("sipariş notu:", orderNote);

  const [thickness, setThicknes] = React.useState();

  //console.log("states: ", thickness);
  return (
    <Router>
      <Switch>
        <Route path="/OrderForm">
          <OrderForm
            size={size}
            sizeChangeHandler={sizeChangeHandler}
            thickness={thickness}
            setThicknes={setThicknes}
            orderNote={orderNote}
            setOrderNote={setOrderNote}
          />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Success" exact>
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
