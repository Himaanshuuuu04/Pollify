import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/NotFound";
import PollCreation from "./components/PollCreation";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
   
    <Routes>
      <Route path="/" element={<> <Navbar /><Home /></>}/>
      <Route path="/PollCreation" element={<PollCreation />} />
      <Route path="*" element={<Card />} />
    </Routes>
  
    </HashRouter>
  );
}

export default App;
