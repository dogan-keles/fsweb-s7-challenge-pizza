import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Header from "./components/Header";
import Pizza from "./components/pizza";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Header.css";
import "./components/Pizza.css";
import "./components/Footer.css";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/pizza">
            <Pizza />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
