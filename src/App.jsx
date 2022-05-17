import React from "react";
import ReactDOM from "react-dom";
import { Forside } from './components/Forside';

import "./index.css";

const App = () => (
  <div className="container">
    <Forside/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
