import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PollProvider from "./components/Context/PollContext"

ReactDOM.createRoot(document.getElementById("root")).render(

    <PollProvider>
      <App />
    </PollProvider>
  
);
