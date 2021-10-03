import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList"

// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/beerlist" component={BeerList} />
        </Switch>
    </Router>
  );
};

export default Routes;
