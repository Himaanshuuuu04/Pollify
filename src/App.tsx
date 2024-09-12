// src/App.tsx
import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/NotFound";
import Success from "./components/Success";
import About from "./components/About";
import PollCreation from "./components/PollCreation";
import Polls from "./components/Polls";
import PollSubmitted from "./components/PollSubmitted";
import PollResults from "./components/Result";
import PageTransition from "./components/subComponents/Transition"; // Import your transition component

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <AnimatePresence>
      <PageTransition key={location.key}>
        <Routes location={location}>
          <Route path="/" element={<> <Navbar /><Home /></>} />
          <Route path="/PollCreation" element={<PollCreation />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/About" element={<About />} />
          <Route path="/Polls" element={<Polls />} />
          <Route path="/PollSubmitted" element={<PollSubmitted />} />
          <Route path="/results" element={<PollResults />} />
          <Route path="*" element={<Card />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
