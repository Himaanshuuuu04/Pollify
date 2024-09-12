import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/NotFound";
import Success from "./components/Success";
import About from "./components/About";
import PollCreation from "./components/PollCreation";
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
   
    <Routes>
      <Route path="/" element={<> <Navbar /><Home /></>}/>
      <Route path="/PollCreation" element={<PollCreation />} />
      <Route path="/Success" element={<Success/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="*" element={<Card />} />
    </Routes>
  
    </HashRouter>
  );
}

export default App;
