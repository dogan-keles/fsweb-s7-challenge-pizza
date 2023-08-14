import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import "./components/Header.css";
import "./components/Pizza.css";

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
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/pizza">
            <Pizza
            /* size={size}
              sizeChangeHandler={sizeChangeHandler}
              thickness={thickness}
              setThicknes={setThicknes}
              orderNote={orderNote}
              setOrderNote={setOrderNote} */
            />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
