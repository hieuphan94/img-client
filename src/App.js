import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { BlogDetail } from "./pages/BlogDetail";
import { TourDetail } from "./pages/TourDetail";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page">
          <BlogDetail />
        </Route>
        <Route exact path="/tour">
          <TourDetail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
