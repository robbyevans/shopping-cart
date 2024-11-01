import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ShoppingCartProvider } from "modules/context/ShoppingCartContext";
import "./index.scss";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </Router>
  </React.StrictMode>
);
