import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Research from "./Pages/Research";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';

const LandingPage = ({ showWelcome, setShowWelcome }) => (
  <>
    <AnimatePresence mode="wait">
      {showWelcome && (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      )}
    </AnimatePresence>

    {!showWelcome && (
      <>
        <Navbar />
        <AnimatedBackground />
        <Home />
        <About />
        <Skills />
        <Research />
        <Experience />
        <Education />
        <Portofolio />
        <ContactPage />
      </>
    )}
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    const onResize = () => AOS.refresh();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
