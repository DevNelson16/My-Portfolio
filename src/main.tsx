import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// createRoot é a API do React 18 para "montar" a app dentro da <div id="root">
// que está no index.html. StrictMode só ajuda a apanhar erros em desenvolvimento,
// não afeta o site em produção.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
