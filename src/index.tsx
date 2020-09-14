import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./components";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("output")
);
