import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18nextInit";
import App from "./App.js";
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <Router>
      <App />
    </Router>
    </RecoilRoot>
  </React.StrictMode>
);
