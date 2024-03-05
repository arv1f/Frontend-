import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        textAlign: "center",
        display: "grid",
        placeItems: "center",
        height: "100vh",
        paddingLeft: "700%",
      }}
    >
      <App />
    </div>
  </React.StrictMode>,
);
