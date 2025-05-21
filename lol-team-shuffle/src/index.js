import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // CSS는 import만 하면 됩니다
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
