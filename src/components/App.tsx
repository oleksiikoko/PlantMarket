import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { Product } from "./";

import "../styles/index.scss";

const App = () => (
  <Switch>
    <Route path="/products/:name" component={Product} />
  </Switch>
);

export default App;
