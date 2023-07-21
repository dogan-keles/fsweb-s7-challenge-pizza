import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Anasayfa from "./components/anasayfa";
import Pizza from "./components/pizza";
import Onay from "./components/onay";

const App = () => {
  const [size, setSize] = React.useState("S");
  const sizeChangeHandler = (e) => setSize(e.target.value);
  const [orderNote, setOrderNote] = React.useState();
  //const noteChangeHandler = (e) => setOrderNote(e.target.value);
  console.log("sipariş notu:", orderNote);

  return (
    <div>
      <div className="ty-logo">
        <img src="./logo.svg" />
      </div>
      <Router>
        <Switch>
          <Route path="/pizza">
            <Pizza />
          </Route>

          <Route path="/">
            <Anasayfa />
          </Route>
          <Route path="/onay">
            <Onay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
