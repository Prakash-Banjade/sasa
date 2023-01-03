import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ContextStore from "./context/ContextStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ContextStore>
        <App />
      </ContextStore>
    </HashRouter>
  </React.StrictMode>
);
