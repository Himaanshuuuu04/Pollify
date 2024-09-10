import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url("src/components/assets/background.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        fontFamily: "Product Sans",
      }}
      className=""
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
