// src/App.tsx
import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Navbar from "./components/subComponents/Navbar";
import Home from "./components/Routes/Home";
import Card from "./components/subComponents/NotFound";
import Success from "./components/subComponents/Success";
import About from "./components/Routes/About";
import PollCreation from "./components/Routes/PollCreation";
import Polls from "./components/Routes/Polls";
import PollSubmitted from "./components/subComponents/PollSubmitted";
import PollResults from "./components/Routes/Result";
import PageTransition from "./components/subComponents/Transition"; 

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
   
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
