import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList"

// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/beerlist" component={BeerList} />
        </Switch>
    </Router>
  );
};

export default Routes;
