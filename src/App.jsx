import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CurrencyDetailPage from "./pages/CurrencyDetailPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/currency/:coin_id"
            component={CurrencyDetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
