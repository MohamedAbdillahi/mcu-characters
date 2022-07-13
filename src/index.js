import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PaginationContextProvider } from "./contexts/PaginationContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PaginationContextProvider>
        <App />
      </PaginationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
